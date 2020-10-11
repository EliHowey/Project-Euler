import * as axios from 'axios';

/**
 * Performs a GET request on the given URL and returns the response.
 *
 * @param {string} url URL to fetch data from
 */
export async function getData(url) {
	try {
		const response = await axios.default.get(url);
		return response;
	} catch (error) {
		throw new Error(`Could not fetch data from ${url}: ${error.message}`);
	}
}

/**
 * Parses Project Euler problem data
 *
 * @param {string} problemData Problem data from Project Euler
 */
export function parseProblemData(problemData) {
	return problemData
		.trim()
		.split('\n')
		.map((str) => {
			const [
				id,
				description,
				published,
				updated,
				solvedBy
			] = str.trim().split('##');
			return {
				id,
				description,
				published: +published,
				updated: +updated,
				solvedBy: +solvedBy
			};
		})
		.slice(1);
}

/**
 * Converts a UTC seconds timestamp to a locale-formatted date string
 *
 * @param {number} utcTimestamp UTC epoch timestamp (in seconds)
 */
export function utcTimestampToDateString(utcTimestamp) {
	const d = new Date(0);
	d.setUTCSeconds(utcTimestamp);
	return d.toLocaleString();
}
