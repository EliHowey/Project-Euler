const INPUT = [
	'73167176531330624919225119674426574742355349194934',
	'96983520312774506326239578318016984801869478851843',
	'85861560789112949495459501737958331952853208805511',
	'12540698747158523863050715693290963295227443043557',
	'66896648950445244523161731856403098711121722383113',
	'62229893423380308135336276614282806444486645238749',
	'30358907296290491560440772390713810515859307960866',
	'70172427121883998797908792274921901699720888093776',
	'65727333001053367881220235421809751254540594752243',
	'52584907711670556013604839586446706324415722155397',
	'53697817977846174064955149290862569321978468622482',
	'83972241375657056057490261407972968652414535100474',
	'82166370484403199890008895243450658541227588666881',
	'16427171479924442928230863465674813919123162824586',
	'17866458359124566529476545682848912883142607690042',
	'24219022671055626321111109370544217506941658960408',
	'07198403850962455444362981230987879927244284909188',
	'84580156166097919133875499200524063689912560717606',
	'05886116467109405077541002256983155200055935729725',
	'71636269561882670428252483600823257530420752963450'
].join('');

const SUBSTRING_LENGTH = 13;

// Add arrow functions for each of your solutions to this array
export const solutions = [
	() => problem008v0(SUBSTRING_LENGTH),
	() => problem008v1(SUBSTRING_LENGTH)
];

/**
 * Finds the largest product of a substring of digits of length n within INPUT.
 *
 * @param {number} n Length of the substring to find
 * @returns The largest product of a substring of length n within INPUT
 */
export function problem008v0(n) {
	let maxProduct = 1;

	for (let i = 0; i <= INPUT.length - n; i++) {
		const product = INPUT.slice(i, i + n)
			.split('')
			.reduce((acc, num) => acc * +num, 1);

		if (product > maxProduct) {
			maxProduct = product;
		}
	}

	return maxProduct;
}

/**
 * Finds the largest product of a substring of digits of length n within INPUT.
 * This version tries to minimize the number of operations performed.
 *
 * @param {number} n Length of the substring to find
 * @returns The largest product of a substring of length n within INPUT
 */
export function problem008v1(n) {
	// Calculate the product of the first substring in advance
	let currentProduct = getSubstringProduct(0, n);
	let maxProduct = currentProduct;

	// Stream the remaining digits
	for (let i = n; i < INPUT.length; i++) {
		if (INPUT.slice(i - n, i).includes('0')) {
			continue; // Product will be 0
		}

		if (currentProduct === 0) {
			// Streaming won't work if the product is 0
			currentProduct = getSubstringProduct(i - n + 1, n);
		} else {
			currentProduct *= +INPUT[i]; // Multiply by last digit of current sequence

			// Divide by first digit of previous sequence (note: we know it's not 0)
			currentProduct /= +INPUT[i - n];
		}

		if (currentProduct > maxProduct) {
			maxProduct = currentProduct;
		}
	}

	return maxProduct;
}

/**
 * Returns the product of all digits of the specified substring of `INPUT`.
 *
 * @param {number} startPos Index of the first character of the substring
 * @param {number} length Length of the substring
 */
function getSubstringProduct(startPos, length) {
	return INPUT.slice(startPos, startPos + length)
		.split('')
		.reduce((acc, num) => acc * +num, 1);
}
