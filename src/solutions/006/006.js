const UPPER_BOUND = 100;

// Add arrow functions for each of your solutions to this array
export const solutions = [
	() => problem006v0(UPPER_BOUND),
	() => problem006v1(UPPER_BOUND)
];

/**
 * Finds the difference between the sum of the squares of the numbers 1 through n
 * and the square of the sum of the numbers 1 through n.
 *
 * @param {number} n
 */
export function problem006v0(n) {
	const firstNNumbers = [...Array(n).keys()].map((i) => i + 1);

	const sumOfSquares = firstNNumbers.reduce((acc, i) => {
		acc += i * i;
		return acc;
	}, 0);

	const sum = firstNNumbers.reduce((acc, i) => (acc += i), 0);

	return sum * sum - sumOfSquares;
}

/**
 * Finds the difference between the sum of the squares of the numbers 1 through n
 * and the square of the sum of the numbers 1 through n. Optimized based on
 * known formulas for the sum from 1 to n and the sum of squares from 1 to n.
 *
 * @param {number} n Limit of the two sums
 */
export function problem006v1(n) {
	const sum = (n * (n + 1)) / 2;
	const sumOfSquares = (n * (2 * n + 1) * (n + 1)) / 6;

	return sum * sum - sumOfSquares;
}
