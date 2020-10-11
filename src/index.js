import * as readline from 'readline-sync';
import {
	getData,
	parseProblemData,
	utcTimestampToDateString
} from './parse.js';

const RESET = '\x1b[0m';
const BOLD = '\x1b[1m';
const DIM = '\x1b[2m';

let problemData;

async function main() {
	console.log('Fetching problem data from projecteuler.net...');

	try {
		const response = await getData(
			'https://projecteuler.net/minimal=problems'
		);

		problemData = parseProblemData(response.data);
		console.log(`Found ${problemData.length} problems.`);
	} catch (error) {
		console.error(error.message);
		return;
	}

	let problemNumber = readline.questionInt(
		'\nWhich problem would you like to run? ',
		{ defaultInput: '0' }
	);

	while (problemNumber) {
		await printProblem(problemNumber);
		problemNumber = readline.questionInt(
			'\nEnter another problem number to run, or type Enter to exit: ',
			{ defaultInput: '0' }
		);
	}
}

main();

/**
 * Print a Project Euler problem and its solution data.
 *
 * @param {number} problemNumber Problem number
 */
async function printProblem(problemNumber) {
	try {
		await printProblemData(problemNumber);

		const solutions = await getSolutions(problemNumber);
		printSolutions(problemNumber, solutions);
	} catch (error) {
		console.error(error.message);
	}
}

/**
 * Prints data for a Project Euler problem.
 *
 * @param {number} problemNumber Problem number
 */
async function printProblemData(problemNumber) {
	const data = problemData[problemNumber - 1];
	if (!data) {
		throw new Error(`Could not find data for Problem ${problemNumber}`);
	}

	console.log(
		'\n' + BOLD + `Problem ${data.id}: ${data.description}` + RESET
	);

	console.log(`Published: ${utcTimestampToDateString(data.published)}`);
	console.log(`Last updated: ${utcTimestampToDateString(data.updated)}`);
	console.log(`Solved by ${data.solvedBy} users` + '\n');

	try {
		const response = await getData(
			`https://projecteuler.net/minimal=${problemNumber}`
		);
		console.log(DIM + response.data.trim() + RESET + '\n');
	} catch (error) {
		console.log(DIM + 'Could not fetch question data' + RESET);
	}
}

async function getSolutions(problemNumber) {
	try {
		const normalizedProblemNumber = problemNumber
			.toString()
			.padStart(3, '0');

		const filename = `./solutions/${normalizedProblemNumber}/${normalizedProblemNumber}.js`;
		const { solutions } = await import(filename);
		return solutions;
	} catch (error) {
		throw new Error(
			`Could not fetch solutions for Problem ${problemNumber}`
		);
	}
}

function printSolutions(problemNumber, solutions) {
	if (solutions && solutions.length > 0) {
		console.log('Solutions:');
		const runtimes = solutions.map(getSolutionData);
		console.table(runtimes);
	} else {
		console.log(`No solutions found for Problem ${problemNumber}`);
	}
}

function getSolutionData(solutionFunction, index) {
	try {
		const startTime = process.hrtime();
		const solution = solutionFunction();
		const [seconds, nanoseconds] = process.hrtime(startTime);

		return {
			Result: solution,
			'Duration (ms)': getDurationMs(seconds, nanoseconds)
		};
	} catch (error) {
		console.error(
			`Could not run solution${index ? ' ' + index : ''}:`,
			error
		);
	}
}

/**
 * Converts the output of hrtime to a single number of milliseconds.
 *
 * @param {number} seconds
 * @param {number} nanoseconds
 */
function getDurationMs(seconds, nanoseconds) {
	return seconds * 1000 + nanoseconds / 1000000;
}
