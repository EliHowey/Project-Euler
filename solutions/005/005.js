import { lcm } from '../../utils/math.js';

const UPPER_BOUND = 20;

export const solutions = [() => problem005v0(UPPER_BOUND)];

export function problem005v0(n) {
	let least = 1;

	for (let i = 1; i <= n; i++) {
		least = lcm(least, i);
	}

	return least;
}
