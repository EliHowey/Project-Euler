import { describe, expect, test } from '@jest/globals';
import * as utils from '../math';

describe('sumDivisibleByN', () => {
	test('sums all numbers from 1 to upperBound', () => {
		expect(utils.sumDivisibleByN(1, 1)).toBe(0);
		expect(utils.sumDivisibleByN(1, 5)).toBe(10);
		expect(utils.sumDivisibleByN(1, 10)).toBe(45);
		expect(utils.sumDivisibleByN(1, 100)).toBe(4950);
		expect(utils.sumDivisibleByN(1, 1000)).toBe(499500);
	});

	test('sums all even numbers from 1 to upperBound', () => {
		expect(utils.sumDivisibleByN(2, 1)).toBe(0);
		expect(utils.sumDivisibleByN(2, 2)).toBe(0);
		expect(utils.sumDivisibleByN(2, 5)).toBe(6);
		expect(utils.sumDivisibleByN(2, 10)).toBe(20);
		expect(utils.sumDivisibleByN(2, 100)).toBe(2450);
		expect(utils.sumDivisibleByN(2, 1000)).toBe(249500);
	});
});
