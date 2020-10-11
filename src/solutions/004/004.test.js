import { describe, expect, test } from '@jest/globals';
import { problem004v0, problem004v1, solutions } from './004.js';

describe('Problem 004', () => {
	test('Correctness', () => {
		const EXPECTED_RESULT = 906609;

		for (const solution of solutions) {
			expect(solution()).toBe(EXPECTED_RESULT);
		}
	});

	describe('Solution 0', () => {
		test('returns the largest palindrome product in the given range', () => {
			expect(problem004v0(1, 5)).toBe(9); // 3 * 3
			expect(problem004v0(1, 10)).toBe(9); // 3 * 3

			expect(problem004v0(1, 100)).toBe(9009); // 91 * 99
			expect(problem004v0(1, 1000)).toBe(906609); // 913 * 993
		});
	});

	describe('Solution 1', () => {
		test('returns the largest palindrome product in the given range', () => {
			expect(problem004v1(1, 5)).toBe(9); // 3 * 3
			expect(problem004v1(1, 10)).toBe(9); // 3 * 3

			expect(problem004v1(1, 100)).toBe(9009); // 91 * 99
			expect(problem004v1(1, 1000)).toBe(906609); // 913 * 993
		});
	});
});
