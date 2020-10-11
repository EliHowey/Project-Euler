/**
 * Utilities - Strings
 */

/**
 * Determines whether the given string is a palindrome.
 *
 * @export
 * @param {String} str String to check
 * @returns Whether `str` is a palindrome
 */
export function isPalindrome(str) {
	return str === reverse(str);
}

/**
 * Reverses a string.
 *
 * @export
 * @param {String} str String to reverse
 * @returns A reversed copy of the string
 */
export function reverse(str) {
	return str.split('').reverse().join('');
}
