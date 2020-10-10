/**
 * Project Euler Problem 5
 * Smallest multiple
 *
 * 2520 is the smallest number that can be divided by each of the numbers
 * from 1 to 10 without any remainder.
 *
 * What is the smallest positive number that is evenly divisible by all of the
 * numbers from 1 to 20?
 */

import { lcm } from '../utils/math.js';

const UPPER_BOUND = 20;

export const question = [
	'2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.',
	'What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?'
];

export const solutions = [() => problem005v0(UPPER_BOUND)];

export function problem005v0(n) {
	let least = 1;

	for (let i = 1; i <= n; i++) {
		least = lcm(least, i);
	}

	return least;
}
