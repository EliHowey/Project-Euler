import { describe, expect, test } from '@jest/globals';
import { problem005v0, solutions } from '../solutions/005.js';

describe('Problem 005', () => {
	test('Correctness', () => {
		const EXPECTED_RESULT = 232792560;

		for (const solution of solutions) {
			expect(solution()).toBe(EXPECTED_RESULT);
		}
	});

	describe('Solution 0', () => {
		test('calculates the smallest number divisible by 1 through n', () => {
			expect(problem005v0(1)).toBe(1);
			expect(problem005v0(2)).toBe(2);
			expect(problem005v0(3)).toBe(6);
			expect(problem005v0(4)).toBe(12);
			expect(problem005v0(5)).toBe(60);
			expect(problem005v0(6)).toBe(60);
			expect(problem005v0(20)).toBe(232792560);
		});
	});
});
