import { describe, expect, test } from '@jest/globals';
import { problem001v0, problem001v1, solutions } from '../solutions/001.js';

describe('Problem 001', () => {
	test('Correctness', () => {
		const EXPECTED_RESULT = 233168;

		for (const solution of solutions) {
			expect(solution()).toBe(EXPECTED_RESULT);
		}
	});

	describe('Solution 0', () => {
		test('sums multiples of 3 and 5 below 10', () => {
			expect(problem001v0(10)).toBe(23);
		});

		test('sums multiples of 3 and 5 below 1000', () => {
			expect(problem001v0(1000)).toBe(233168);
		});

		test('(performance) sums multiples of 3 and 5 below 1000000', () => {
			expect(problem001v0(1000000)).toBe(233333166668);
		});
	});

	describe('Solution 1', () => {
		test('sums multiples of 3 and 5 below 10', () => {
			expect(problem001v1(10)).toBe(23);
		});

		test('sums multiples of 3 and 5 below 1000', () => {
			expect(problem001v1(1000)).toBe(233168);
		});

		test('(performance) sums multiples of 3 and 5 below 1000000', () => {
			expect(problem001v1(1000000)).toBe(233333166668);
		});
	});
});
