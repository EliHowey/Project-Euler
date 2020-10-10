import * as readline from 'readline-sync';

const main = async () => {
	const problemNumber = readline.questionInt(
		'Which problem would you like to run? '
	);

	try {
		const filename = `./solutions/${problemNumber
			.toString()
			.padStart(3, '0')}.js`;

		const { metadata } = await import(filename);

		if (metadata) {
			console.log(`\nProblem ${problemNumber}`);
			console.log(metadata.question + '\n');

			if (metadata.versions) {
				const runtimes = metadata.versions.map(getSolutionData);

				console.table(runtimes);
			} else if (
				metadata.solution &&
				typeof metadata.solution === 'function'
			) {
				const startTime = process.hrtime();
				const solution = metadata.solution();
				const [seconds, nanoseconds] = process.hrtime(startTime);

				console.log(
					`Solution (${getDurationMs(seconds, nanoseconds)}ms):`
				);
				console.log(solution);
			}
		} else {
			console.log(`No info found for Problem ${problemNumber}`);
		}
	} catch (error) {
		console.log(error);
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
