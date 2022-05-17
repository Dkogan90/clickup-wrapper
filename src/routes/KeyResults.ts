import { Request } from '../structures/Request';
import { BaseRoute } from './BaseRoute';

export class KeyResults extends BaseRoute {
	constructor(request: Request) {
		super(request, 'key_result');
	}

	/**
	 * Update a key result
	 *
	 * @param {String} keyResultId The key result id
	 * @param {Object} data The key result data
	 */
	updateKeyResult(keyResultId: string, data: object) {
		return this._request.put({
			endpoint: `${this.route}/${keyResultId}`,
			data,
		});
	}

	/**
	 * Delete a key result
	 *
	 * @param {String} keyResultId The key result id
	 */
	deleteKeyResult(keyResultId: string) {
		return this._request.delete({
			endpoint: `${this.route}/${keyResultId}`,
		});
	}
}
