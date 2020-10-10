import { removeAllFactors } from '../../utils/math.js';

const PRIME_TO_FACTOR = 600851475143;

export const solutions = [
	() => problem003v0(PRIME_TO_FACTOR),
	() => problem003v1(PRIME_TO_FACTOR)
];

/**
 * Naive solution. Calculates the largest prime factor of `n` by iterating over
 * all possible factors of the remaining quotient.
 *
 * @export
 * @param {number} n Natural number
 * @returns The largest prime factor of `n`
 */
export function problem003v0(n) {
	let quotient = n;
	let factor = 2;
	let largestFactor = 1;

	while (quotient > 1) {
		if (quotient % factor === 0) {
			largestFactor = factor;
			quotient = removeAllFactors(quotient, factor);
		}

		factor += 1;
	}

	return largestFactor;
}

/**
 * More efficient solution that takes advantage of two facts:
 * 1. 2 is the only even prime.
 * 2. The prime factorization of `n` can have at most one factor larger than `sqrt(n)`.
 *
 * @export
 * @param {*} n
 * @returns
 */
export function problem003v1(n) {
	let quotient = n;
	let largestFactor = 1;

	// Handle divisibility by 2 separately, since it is the only even prime
	if (quotient % 2 === 0) {
		largestFactor = 2;
		quotient = removeAllFactors(quotient, 2);
	}

	let factor = 3;
	let maxFactor = Math.sqrt(quotient);

	while (quotient > 1 && factor <= maxFactor) {
		if (quotient % factor === 0) {
			largestFactor = factor;
			quotient = removeAllFactors(quotient, factor);
			maxFactor = Math.sqrt(quotient);
		}

		factor += 2;
	}

	// Either this process discovered all factors of n, or the quotient is
	// itself prime and greater than sqrt(n)
	return quotient === 1 ? largestFactor : quotient;
}
