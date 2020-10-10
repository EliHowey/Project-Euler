import { describe, expect, test } from '@jest/globals';
import { problem002v0, problem002v1 } from '../solutions/002';

describe('Problem 002 - Solution 1', () => {
	test('sums even Fibonacci numbers below 10', () => {
		expect(problem002v0(10)).toBe(10);
	});

	test('sums even Fibonacci numbers below 4000000', () => {
		expect(problem002v0(4000000)).toBe(4613732);
	});
});

describe('Problem 002 - Solution 2', () => {
	test('sums even Fibonacci numbers below 10', () => {
		expect(problem002v1(10)).toBe(10);
	});

	test('sums even Fibonacci numbers below 4000000', () => {
		expect(problem002v1(4000000)).toBe(4613732);
	});
});
