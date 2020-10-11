import { describe, expect, test } from '@jest/globals';
import { problem008v0, problem008v1, solutions } from './008.js';

describe('Problem 008', () => {
	test('Correctness', () => {
		const EXPECTED_RESULT = 23514624000;

		for (const solution of solutions) {
			expect(solution()).toBe(EXPECTED_RESULT);
		}
	});

	describe('Solution 0', () => {
		test('that the code does something', () => {
			expect(problem008v0(4)).toBe(5832);
		});
	});

	describe('Solution 1', () => {
		test('that the code does something', () => {
			expect(problem008v1(4)).toBe(5832);
		});
	});
});
