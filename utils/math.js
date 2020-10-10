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
 * Finds the least common multiple of two numbers.
 *
 * @export
 * @param {number} a
 * @param {number} b
 * @returns The least common multiple of a and b
 */
export function lcm(a, b) {
	return a * b / gcd(a, b);
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
