/**
 * Utilities - Math
 */

/**
 * Finds the greatest common divisor of two numbers,
 * using the Euclidean algorithm.
 *
 * @export
 * @param {number} a
 * @param {number} b
 * @returns The greatest common divisor of a and b
 */
export function gcd(a, b) {
	while (b !== 0) {
		const temp = a % b;
		a = b;
		b = temp;
	}

	return a;
}

/**
 * Determines whether n is prime.
 *
 * @param {number} n Number to test for primality
 */
export function isPrime(n) {
	if (n <= 1) {
		return false;
	}

	// 2 is the only even prime
	if (n % 2 === 0) {
		return n === 2;
	}

	// Performance: Eliminate multiples of 3
	if (n % 3 === 0) {
		return n === 3;
	}

	// The prime factorization of n can have at most one prime greater than sqrt(n).
	// If we can't find a prime <= sqrt(n), then all its prime factors must be
	// greater than sqrt(n), hence n itself must be prime.
	const sqrt = Math.floor(Math.sqrt(n));

	let factor = 5;

	// eslint-disable-next-line no-unmodified-loop-condition
	while (factor <= sqrt) {
		// All primes greater than 3 can be written as either 6k-1 or 6k+1
		if (n % factor === 0 || n % (factor + 2) === 0) {
			return false;
		}

		factor += 6;
	}

	return true;
}

/**
 * Determines whether (a, b, c) is a Pythagorean triple.
 *
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @returns True if a^2 + b^2 = c^2, false otherwise
 */
export function isPythagoreanTriple(a, b, c) {
	return a * a + b * b === c * c;
}

/**
 * Finds the least common multiple of two numbers.
 *
 * @export
 * @param {number} a
 * @param {number} b
 * @returns The least common multiple of a and b
 */
export function lcm(a, b) {
	return (a * b) / gcd(a, b);
}

/**
 * If `n = k * factor^i` for some `i`, this returns `k`.
 *
 * @param {*} n Natural number
 * @param {*} factor Factor of `n` to remove
 * @returns The result of dividing `n` by `factor` as many times as possible
 */
export function removeAllFactors(n, factor) {
	let quotient = n;

	while (quotient % factor === 0) {
		quotient /= factor;
	}

	return quotient;
}

/**
 * Calculates the sum of the natural numbers divisible by `n` and less than
 * `upperBound`.
 *
 * This relies on two observations:
 * 1. The sum of all multiples of `n` below `upperBound` is equal to `n` times
 * the sum from 1 to `upperBound / n`.
 * 2. The sum from 1 to `k` is equal to `k(k+1)/2`.
 *
 * @param {number} n Divisor
 * @param {number} upperBound Maximum number to include in the sum
 * @returns The sum of all numbers less than `upperBound` that are divisible by `n`
 */
export function sumDivisibleByN(n, upperBound) {
	const p = Math.floor((upperBound - 1) / n);
	return n * ((p * (p + 1)) / 2);
}
