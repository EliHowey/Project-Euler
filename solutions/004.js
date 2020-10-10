/**
 * Project Euler Problem 4
 * Largest palindrome product
 *
 * A palindromic number reads the same both ways. The largest palindrome made
 * from the product of two 2-digit numbers is 9009 = 91 × 99.
 *
 * Find the largest palindrome made from the product of two 3-digit numbers.
 */

import { isPalindrome } from '../utils/strings.js';

const LOWER_BOUND = 100;
const UPPER_BOUND = 1000;

export const question = [
	'A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.',
	'Find the largest palindrome made from the product of two 3-digit numbers.'
];

export const solutions = [
	() => problem004v0(LOWER_BOUND, UPPER_BOUND),
	() => problem004v1(LOWER_BOUND, UPPER_BOUND)
];

/**
 * Calculates the largest palindrome that is a product of numbers
 * from `lowerBound` to `upperBound`, left-inclusive.
 *
 * @export
 * @param {number} lowerBound Smallest number to use as a factor (inclusive)
 * @param {number} upperBound Largest number to use as a factor (exclusive)
 * @returns The largest product of numbers in [lowerBound,upperBound) that is a palindrome
 */
export function problem004v0(lowerBound, upperBound) {
	let a = lowerBound;
	let largestPalindrome = 0;

	while (a <= upperBound) {
		let b = a;

		while (b <= upperBound) {
			const product = a * b;

			if (
				isPalindrome(product.toString()) &&
				product > largestPalindrome
			) {
				largestPalindrome = product;
			}

			b += 1;
		}

		a += 1;
	}

	return largestPalindrome;
}

/**
 * Slightly improved version that avoids calculating palindromes for pairs of
 * numbers whose product is smaller than the largest currently-known palindrome.
 *
 * @export
 * @param {*} lowerBound Smallest number to use as a factor (inclusive)
 * @param {*} upperBound Largest number to use as a factor (exclusive)
 */
export function problem004v1(lowerBound, upperBound) {
	let a = upperBound;
	let largestPalindrome = 0;

	while (a >= lowerBound) {
		let b = upperBound;

		while (b >= a) {
			const product = a * b;

			if (product <= largestPalindrome) {
				break;
			}

			if (isPalindrome(product.toString())) {
				largestPalindrome = product;
			}

			b -= 1;
		}

		a -= 1;
	}

	return largestPalindrome;
}
