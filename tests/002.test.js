import { describe, expect, test } from '@jest/globals';
import { problem002v0, problem002v1, solutions } from '../solutions/002.js';

describe('Problem 002', () => {
	test('Correctness', () => {
		const EXPECTED_RESULT = 4613732;

		for (const solution of solutions) {
			expect(solution()).toBe(EXPECTED_RESULT);
		}
	});

	describe('Solution 0', () => {
		test('sums even Fibonacci numbers below 10', () => {
			expect(problem002v0(10)).toBe(10);
		});

		test('sums even Fibonacci numbers below 4000000', () => {
			expect(problem002v0(4000000)).toBe(4613732);
		});
	});

	describe('Solution 1', () => {
		test('sums even Fibonacci numbers below 10', () => {
			expect(problem002v1(10)).toBe(10);
		});

		test('sums even Fibonacci numbers below 4000000', () => {
			expect(problem002v1(4000000)).toBe(4613732);
		});
	});
});
