import { isPrime } from '../../utils/math.js';

// Add arrow functions for each of your solutions to this array
export const solutions = [() => problem007v0(10001)];

/**
 * Calculates the nth prime number.
 *
 * @param {number} n
 * @returns The nth prime number
 */
export function problem007v0(n) {
	let numPrimes = 1; // 2 is prime
	let candidate = 1;

	while (numPrimes < n) {
		candidate += 2;
		if (isPrime(candidate)) {
			numPrimes++;
		}
	}

	return candidate;
}
