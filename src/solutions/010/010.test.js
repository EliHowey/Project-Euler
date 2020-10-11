import { describe, expect, test } from '@jest/globals';
import { problem010v0, solutions } from './010.js';

describe('Problem 010', () => {
	test('Correctness', () => {
		const EXPECTED_RESULT = 142913828922;

		for (const solution of solutions) {
			expect(solution()).toBe(EXPECTED_RESULT);
		}
	});

	describe('Solution 0', () => {
		test('that the code does something', () => {
			expect(problem010v0(10)).toBe(17);
		});
	});
});
