import { getPrimes, sum } from '../../utils/math.js';

const UPPER_BOUND = 2000000;

// Add arrow functions for each of your solutions to this array
export const solutions = [() => problem010v0(UPPER_BOUND)];

/**
 * Returns the sum of all primes less than n.
 *
 * @param {number} n Upper bound
 * @returns The sum of all primes less than n
 */
export function problem010v0(n) {
	return sum(getPrimes(n));
}
