export type RequestParams = Record<string, string | Array<string> | number | boolean>;

/**
 * Converts parameters for a request to URLSearchParams
 *
 * @param {Object} query parameters to be converted
 * @returns {URLSearchParams} searchParams The query in LHS bracket style format
 */
export const buildSearchParams = (query: RequestParams) => {
	const params = new URLSearchParams();

	for (const key in query) {
		const value = query[key];
		if (key.endsWith('[]') && value instanceof Array) {
			value.forEach((entry) => {
				params.append(key, entry);
			});
		} else if (typeof value !== 'object') {
			params.set(key, value.toString());
		}
	}

	return params;
};
