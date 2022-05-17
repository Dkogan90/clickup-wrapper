import got from 'got/dist/source';
import { deepMerge } from './deepMerge';

/**
 * Creates a got instance with clickup default config
 * @private
 * @param {got.ExtendOptions} requestOptions Options for the created got instance. All options can be found [here](https://github.com/sindresorhus/got#options)
 * @returns {got.Got} A got instance
 */
export const createRequestInstance = (token: string, requestOptions = {}) => {
	const requestDefaultOptions = {
		headers: {
			Authorization: token,
			'Content-Type': 'application/json',
		},
		responseType: 'json',
		prefixUrl: 'https://api.clickup.com/api/v2',
	};
	// apply defaults where necessary
	const requestConfig = deepMerge(requestOptions, requestDefaultOptions);
	return got.extend(requestConfig);
};
