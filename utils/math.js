/**
 * Utilities - Math
 */

/**
 * Calculates the sum of the natural numbers divisible by `n` and less than
 * `upperBound`.
 *
 * This relies on two observations:
 * 1. The sum of all multiples of `n` below `upperBound` is equal to `n` times
 * the sum from 1 to `upperBound / n`.
 * 2. The sum from 1 to `k` is equal to `k(k+1)/2`.
 *
 * @param {*} n Divisor
 * @param {*} upperBound Maximum number to include in the sum
 * @returns The sum of all numbers less than `upperBound` that are divisible by `n`
 */
export function sumDivisibleByN(n, upperBound) {
	const p = Math.floor((upperBound - 1) / n);
	return n * ((p * (p + 1)) / 2);
}
