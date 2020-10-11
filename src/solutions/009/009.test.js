import { describe, expect, test } from '@jest/globals';
import { problem009v0, problem009v1, solutions } from './009.js';

describe('Problem 009', () => {
	test('Correctness', () => {
		const EXPECTED_RESULT = 31875000;

		for (const solution of solutions) {
			expect(solution()).toBe(EXPECTED_RESULT);
		}
	});

	describe('Solution 0', () => {
		test('rejects odd input', () => {
			expect(problem009v0(13)).toBeUndefined();
		});

		test('that the code does something', () => {
			expect(problem009v0(12)).toBe(60);
		});
	});

	describe('Solution 1', () => {
		test('rejects odd input', () => {
			expect(problem009v1(13)).toBeUndefined();
		});

		test('that the code does something', () => {
			expect(problem009v1(12)).toBe(60);
			expect(problem009v1(70)).toBe(12180);
		});
	});
});
