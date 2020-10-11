import { describe, expect, test } from '@jest/globals';
import * as utils from '../math';

describe('isPrime', () => {
	test('rejects 1', () => {
		expect(utils.isPrime(1)).toBeFalsy();
	});

	test('accepts 2 and 3', () => {
		expect(utils.isPrime(2)).toBeTruthy();
		expect(utils.isPrime(3)).toBeTruthy();
	});

	test('rejects multiples of 2 and 3', () => {
		expect(utils.isPrime(4)).toBeFalsy();
		expect(utils.isPrime(6)).toBeFalsy();
		expect(utils.isPrime(9)).toBeFalsy();
	});

	test('handles higher numbers', () => {
		expect(utils.isPrime(5)).toBeTruthy(); // First factor not explicitly hanlded
		expect(utils.isPrime(97)).toBeTruthy(); // Prime
		expect(utils.isPrime(95)).toBeFalsy(); // Divisible by 5
	});
});

describe('removeAllFactors', () => {
	const n = 2 ** 3 * 3; // = 24

	test('leaves n unchanged if it is not divisible by factor', () => {
		expect(utils.removeAllFactors(n, 5)).toBe(n);
	});

	test('removes a factor that appears once in n', () => {
		expect(utils.removeAllFactors(n, 3)).toBe(n / 3);
	});

	test('removes a factor that appears more than once in n', () => {
		expect(utils.removeAllFactors(n, 2)).toBe(n / 2 ** 3);
	});
});

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
