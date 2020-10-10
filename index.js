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

			const startTime = process.hrtime();
			const solution = metadata.solution();
			const [seconds, nanoseconds] = process.hrtime(startTime);

			console.log(
				`Solution (${getDurationString(seconds, nanoseconds)}):`
			);
			console.log(solution);
		} else {
			console.log(`No info found for Problem ${problemNumber}`);
		}
	} catch (error) {
		console.log(error);
	}
};

main();

function getDurationString(seconds, nanoseconds) {
	const ms = (nanoseconds / 1000000).toFixed(6);

	if (!seconds) {
		return `${ms}ms`;
	}

	return `${seconds}.${ms}s`;
}
