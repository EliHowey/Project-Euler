const UPPER_BOUND = 4000000;

export const solutions = [
	() => problem002v0(UPPER_BOUND),
	() => problem002v1(UPPER_BOUND)
];

/**
 * Naive solution. Iteratively checks every Fibonacci number, summing only the
 * even ones.
 *
 * @export
 * @param {number} upperBound Upper bound on the numbers to include in the sum
 * @returns The sum of all Fibonacci numbers less than `upperBound`
 */
export function problem002v0(upperBound) {
	let sum = 0;
	let a = 1;
	let b = 1;

	while (b < upperBound) {
		if (b % 2 === 0) {
			sum += b;
		}
		const temp = a + b;
		a = b;
		b = temp;
	}

	return sum;
}

/**
 * Slightly more efficient solution that takes advantage of the fact that every
 * third Fibonacci number is even.
 *
 * @export
 * @param {number} upperBound Upper bound on the numbers to include in the sum
 * @returns The sum of all Fibonacci numbers less than `upperBound`
 */
export function problem002v1(upperBound) {
	let sum = 0;
	let a = 1;
	let b = 1;
	let c = a + b;

	while (c < upperBound) {
		sum += c;
		a = b + c;
		b = c + a;
		c = a + b;
	}

	return sum;
}
