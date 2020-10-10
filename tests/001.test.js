import { describe, expect, test } from '@jest/globals';
import { problem001Naive, problem001Optimized } from '../solutions/001.js';

describe('Naive Solution', () => {
	test('sums multiples of 3 and 5 below 10', () => {
		expect(problem001Naive(10)).toBe(23);
	});

	test('sums multiples of 3 and 5 below 1000', () => {
		expect(problem001Naive(1000)).toBe(233168);
	});

	test('(performance) sums multiples of 3 and 5 below 1000000', () => {
		expect(problem001Naive(1000000)).toBe(233333166668);
	});
});

describe('Optimized Solution', () => {
	test('sums multiples of 3 and 5 below 10', () => {
		expect(problem001Optimized(10)).toBe(23);
	});

	test('sums multiples of 3 and 5 below 1000', () => {
		expect(problem001Optimized(1000)).toBe(233168);
	});

	test('(performance) sums multiples of 3 and 5 below 1000000', () => {
		expect(problem001Optimized(1000000)).toBe(233333166668);
	});
});
