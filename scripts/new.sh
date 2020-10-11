#!/usr/bin/env bash

# Prompt for a problem number

read -p "Enter the problem number to create: " problemNumber

while [ -z "$problemNumber" ] || ! [[ $problemNumber =~ ^[0-9]+$ ]]; do
	read -p "Value must be a non-negative integer: " problemNumber
done

# Pad problem number with zeroes to get a 3-digit number
normalizedNum=`printf %03d $problemNumber`

# Test for the existence of the files to create; if they exist, don't overwrite

solutionDir="src/solutions/$normalizedNum"
scriptFilename="$solutionDir/$normalizedNum.js"
testFilename="$solutionDir/$normalizedNum.test.js"

if [ -f "$scriptFilename" ]; then
	echo "Cannot create files: $scriptFilename already exists."; exit 0
fi

if [ -f "$testFilename" ]; then
	echo "Cannot create files: $testFilename already exists."; exit 0
fi

# Create directory for script and test files
mkdir -p $solutionDir

# Create script file
echo -e "// Add arrow functions for each of your solutions to this array
export const solutions = [() => problem${normalizedNum}v0()];

/**
 * Description of the solution function.
 *
 * @param {*} paramName Parameter description
 * @returns Return value
 */
export function problem${normalizedNum}v0(paramName) {}" >> $scriptFilename

# Create test file
echo -e "import { describe, expect, test } from '@jest/globals';
import { problem${normalizedNum}v0, solutions } from './${normalizedNum}.js';

describe('Problem $normalizedNum', () => {
	test('Correctness', () => {
		const EXPECTED_RESULT = ''; // Define this based on the problem

		for (const solution of solutions) {
			expect(solution()).toBe(EXPECTED_RESULT);
		}
	});

	describe('Solution 0', () => {
		test('that the code does something', () => {
			expect(problem${normalizedNum}v0()).toBeDefined();
		});
	});
});" >> $testFilename
