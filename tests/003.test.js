import { describe, expect, test } from '@jest/globals';
import { problem003v1, problem003v2 } from '../solutions/003';

describe('Problem 003 - Solution 1', () => {
	test('calculates the largest prime factor of the given upper bound', () => {
		expect(problem003v1(100)).toBe(5);
		expect(problem003v1(111)).toBe(37);
		expect(problem003v1(13195)).toBe(29);
		expect(problem003v1(600851475143)).toBe(6857);
	});
});

describe('Problem 003 - Solution 2', () => {
	test('calculates the largest prime factor of the given upper bound', () => {
		expect(problem003v2(100)).toBe(5);
		expect(problem003v2(111)).toBe(37);
		expect(problem003v2(13195)).toBe(29);
		expect(problem003v2(600851475143)).toBe(6857);
	});
});
