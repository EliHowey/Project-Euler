import {
	gcd,
	isPythagoreanTriple,
	removeAllFactors
} from '../../utils/math.js';

const SUM = 1000;

// Add arrow functions for each of your solutions to this array
export const solutions = [() => problem009v0(SUM), () => problem009v1(SUM)];

/**
 * Returns the product abc of the Pythagorean triple (a, b, c) such that
 * a + b + c = sum, if such a triple exists.
 *
 * @param {number} sum Desired value of a + b + c
 * @returns abc, where (a, b, c) is the (first) Pythagorean triple such that a + b + c = sum
 */
export function problem009v0(sum) {
	if (sum % 2 === 1) {
		console.log('The sum of a Pythagorean triple cannot be odd.');
		return;
	}

	for (let a = 1; a <= sum - 2; a++) {
		for (let b = a + 1; b < sum - 1 - a; b++) {
			const c = sum - a - b;

			if (isPythagoreanTriple(a, b, c)) {
				return a * b * c;
			}
		}
	}
}

/**
 * Returns the product abc of the Pythagorean triple (a, b, c) such that
 * a + b + c = n, if such a triple exists.
 *
 * Uses the parameterization of Pythagorean triples, where
 * m > n > 0, exactly one of m and n is even, gcd(m, n) = 1, and d = gcd(a, b, c)):
 *
 *   a = (m^2 - n^2) * d,
 *   b = 2mnd,
 *   c = (m^2 + n^2) * d
 *
 * @param {number} sum Desired value of a + b + c
 * @returns abc, where (a, b, c) is the (first) Pythagorean triple such that a + b + c = sum
 */
export function problem009v1(sum) {
	if (sum % 2 === 1) {
		console.log('The sum of a Pythagorean triple cannot be odd.');
		return;
	}

	// Note that sum = a + b + c = 2m(m + n)d
	const halfSum = sum / 2;

	for (let m = 2; m <= Math.floor(halfSum); m++) {
		if (halfSum % m === 0) {
			const kBound = removeAllFactors(halfSum / m, 2);
			let k = m % 2 === 1 ? m + 2 : m + 1;

			while (k < 2 * m && k <= kBound) {
				if (kBound % k === 0 && gcd(k, m) === 1) {
					const d = halfSum / (k * m);
					const n = k - m;
					const a = d * (m * m - n * n);
					const b = 2 * d * m * n;
					const c = d * (m * m + n * n);

					return a * b * c;
				}

				k += 2;
			}
		}
	}
}
