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

export const metadata = {
	question: 'Find the largest palindrome made from the product of two 3-digit numbers.',
	solution: () => problem004v1(100, 1000)
};

/**
 * Calculates the largest palindrome that is a product of numbers
 * from `lowerBound` to `upperBound`, left-inclusive.
 *
 * @export
 * @param {number} lowerBound Smallest number to use as a factor (inclusive)
 * @param {number} upperBound Largest number to use as a factor (exclusive)
 * @returns The largest product of numbers in [lowerBound,upperBound) that is a palindrome
 */
export function problem004v1(lowerBound, upperBound) {
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
