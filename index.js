import * as readline from 'readline-sync';

const main = async () => {
	const problemNumber = readline.questionInt(
		'Which problem would you like to run? '
	);

	try {
		const filename = `./solutions/${problemNumber
			.toString()
			.padStart(3, '0')}.js`;

		const { question, solutions } = await import(filename);

		if (question) {
			console.log(`\nProblem ${problemNumber}:`);

			if (typeof question === 'string') {
				console.log(question + '\n');
			} else {
				console.log(question.join('\n\n') + '\n');
			}
		} else {
			console.error(`No question text for Problem ${problemNumber}`);
		}

		if (solutions && solutions.length > 0) {
			console.log('Solutions:');
			const runtimes = solutions.map(getSolutionData);
			console.table(runtimes);
		} else {
			console.log(`No solutions found for Problem ${problemNumber}`);
		}
	} catch (error) {
		console.log(
			`Could not find solution file for Problem ${problemNumber}`
		);
	}
};

main();

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
