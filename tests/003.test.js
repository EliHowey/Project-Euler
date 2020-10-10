import { describe, expect, test } from '@jest/globals';
import { problem003v0, problem003v1 } from '../solutions/003';

describe('Problem 003 - Solution 1', () => {
	test('calculates the largest prime factor of the given upper bound', () => {
		expect(problem003v0(100)).toBe(5);
		expect(problem003v0(111)).toBe(37);
		expect(problem003v0(13195)).toBe(29);
		expect(problem003v0(600851475143)).toBe(6857);
	});
});

describe('Problem 003 - Solution 2', () => {
	test('calculates the largest prime factor of the given upper bound', () => {
		expect(problem003v1(100)).toBe(5);
		expect(problem003v1(111)).toBe(37);
		expect(problem003v1(13195)).toBe(29);
		expect(problem003v1(600851475143)).toBe(6857);
	});
});
