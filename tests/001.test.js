import { describe, expect, test } from '@jest/globals';
import { problem001v1, problem001v2 } from '../solutions/001.js';

describe('Problem 001 - Solution 1', () => {
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

describe('Problem 001 - Solution 2', () => {
	test('sums multiples of 3 and 5 below 10', () => {
		expect(problem001v2(10)).toBe(23);
	});

	test('sums multiples of 3 and 5 below 1000', () => {
		expect(problem001v2(1000)).toBe(233168);
	});

	test('(performance) sums multiples of 3 and 5 below 1000000', () => {
		expect(problem001v2(1000000)).toBe(233333166668);
	});
});
