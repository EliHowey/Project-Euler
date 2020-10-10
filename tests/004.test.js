import { describe, expect, test } from '@jest/globals';
import { problem004v0 } from '../solutions/004.js';

describe('Problem 004 - Solution 1', () => {
	test('returns the largest palindrome product in the given range', () => {
		expect(problem004v0(1, 5)).toBe(9); // 3 * 3
		expect(problem004v0(1, 10)).toBe(9); // 3 * 3

		expect(problem004v0(1, 100)).toBe(9009); // 91 * 99
		expect(problem004v0(1, 1000)).toBe(906609); // 913 * 993
	});
});
