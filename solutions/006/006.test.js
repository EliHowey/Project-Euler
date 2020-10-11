import { describe, expect, test } from '@jest/globals';
import { problem006v0, solutions } from './006.js';

describe('Problem 006', () => {
	test('Correctness', () => {
		const EXPECTED_RESULT = 25164150;

		for (const solution of solutions) {
			expect(solution()).toBe(EXPECTED_RESULT);
		}
	});

	describe('Solution 0', () => {
		test('returns the correct result for n = 10', () => {
			expect(problem006v0(10)).toBe(2640);
		});
	});

	describe('Solution 1', () => {
		test('returns the correct result for n = 10', () => {
			expect(problem006v0(10)).toBe(2640);
		});
	});
});
