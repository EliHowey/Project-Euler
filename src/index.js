import * as fs from 'fs';
import * as readline from 'readline-sync';

const RESET = '\x1b[0m';
const BOLD = '\x1b[1m';
const DIM = '\x1b[2m';

const main = async () => {
	const problemNumber = readline.questionInt(
		'Which problem would you like to run? '
	);

	try {
		const metadata = getMetadata(problemNumber);
		printMetadata(metadata);

		const solutions = await getSolutions(problemNumber);
		printSolutions(problemNumber, solutions);
	} catch (error) {
		console.error(error.message);
	}
};

main();

function getMetadata(problemNumber) {
	try {
		const normalizedProblemNumber = problemNumber
			.toString()
			.padStart(3, '0');

		const metadataBuffer = fs.readFileSync(
			`src/metadata/${normalizedProblemNumber}.json`
		);
		return JSON.parse(metadataBuffer.toString());
	} catch (error) {
		throw new Error(
			`Could not fetch metadata for Problem ${problemNumber}: ${error.message}`
		);
	}
}

function printMetadata(metadata) {
	if (!metadata) {
		return;
	}

	console.log(BOLD + `\nProblem ${metadata.problem}: ${metadata.name}` + RESET);

	if (metadata.difficulty) {
		console.log(`Difficulty: ${metadata.difficulty * 100}%\n`);
	} else {
		console.log('\n');
	}

	if (typeof metadata.question === 'string') {
		console.log(DIM + metadata.question + RESET + '\n');
	} else {
		console.log(DIM + metadata.question.join('\n\n') + RESET + '\n');
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

function getDurationMs(seconds, nanoseconds) {
	return seconds * 1000 + nanoseconds / 1000000;
}
