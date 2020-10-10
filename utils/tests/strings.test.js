import { describe, expect, test } from '@jest/globals';
import * as utils from '../strings';

describe('isPalindrome', () => {
	test('correctly identifies palindromes', () => {
		expect(utils.isPalindrome('')).toBe(true);
		expect(utils.isPalindrome('a')).toBe(true);
		expect(utils.isPalindrome('aba')).toBe(true);
		expect(utils.isPalindrome('abba')).toBe(true);
	});

	test('correctly identifies non-palindromes', () => {
		expect(utils.isPalindrome('abc')).toBe(false);
		expect(utils.isPalindrome('abaa')).toBe(false);
		expect(utils.isPalindrome('abbab')).toBe(false);
	});
});

describe('reverse', () => {
	test('correctly reverses the given string', () => {
		expect(utils.reverse('')).toBe('');
		expect(utils.reverse('a')).toBe('a');
		expect(utils.reverse('ab')).toBe('ba');
		expect(utils.reverse('aba')).toBe('aba');
		expect(utils.reverse('abac')).toBe('caba');
	});
});
