import { describe, expect, test } from '@jest/globals';
import { solutions } from './007.js';

describe('Problem 007', () => {
	test('Correctness', () => {
		const EXPECTED_RESULT = 104743;

		for (const solution of solutions) {
			expect(solution()).toBe(EXPECTED_RESULT);
		}
	});
});
