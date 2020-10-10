/**
 * Project Euler Problem 1
 * Multiples of 3 and 5
 *
 * If we list all the natural numbers below 10 that are multiples of 3 or 5, we
 * get 3, 5, 6 and 9. The sum of these multiples is 23.
 *
 * Find the sum of all the multiples of 3 or 5 below 1000.
 */

import { sumDivisibleByN } from '../utils/math.js';

/**
 * Naive solution. Loops over all numbers less than the upper bound, eliminating
 * those that are not multiples of 3 or 5.
 *
 * @export
 * @param {number} upperBound Maximum number to include in the sum
 * @returns The sum of all multiples of 3 or 5 less than `upperBound`
 */
export function problem001Naive(upperBound) {
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
export function problem001Optimized(upperBound) {
	return (
		sumDivisibleByN(3, upperBound) +
		sumDivisibleByN(5, upperBound) -
		sumDivisibleByN(3 * 5, upperBound)
	);
}
