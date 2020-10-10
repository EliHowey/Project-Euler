import { sumDivisibleByN } from '../../utils/math.js';

const UPPER_BOUND = 1000;

export const solutions = [
	() => problem001v0(UPPER_BOUND),
	() => problem001v1(UPPER_BOUND)
];

/**
 * Naive solution. Loops over all numbers less than the upper bound, eliminating
 * those that are not multiples of 3 or 5.
 *
 * @export
 * @param {number} upperBound Maximum number to include in the sum
 * @returns The sum of all multiples of 3 or 5 less than `upperBound`
 */
export function problem001v0(upperBound) {
	let sum = 0;

	for (let i = 1; i < upperBound; i++) {
		if (i % 3 === 0 || i % 5 === 0) {
			sum += i;
		}
	}

	return sum;
}

/**
 * Optimized solution. Uses knowledge about multiples and sequential sums to
 * return the same sum as `problem001Naive` in O(1) time.
 *
 * @export
 * @param {number} upperBound Maximum number to include in the sum
 * @returns The sum of all multiples of 3 or 5 less than `upperBound`
 */
export function problem001v1(upperBound) {
	return (
		sumDivisibleByN(3, upperBound) +
		sumDivisibleByN(5, upperBound) -
		sumDivisibleByN(3 * 5, upperBound)
	);
}
