import { Request } from '../structures/Request';
import { BaseRoute } from './BaseRoute';

export class Goals extends BaseRoute {
	/**
	 * @constructor
	 * @param {Request} request A request instance
	 */
	constructor(request: Request) {
		super(request, 'goal');
	}

	/**
	 * Get a goal
	 *
	 * @param {String} goalId The goal id
	 */
	async get(goalId: string) {
		return this._request.get({
			endpoint: `${this.route}/${goalId}`,
		});
	}

	/**
	 * Update a goal
	 *
	 * @param {String} goalId The goal id
	 * @param {Object} data The goal data
	 */
	async update(goalId: string, data: object) {
		return this._request.put({
			endpoint: `${this.route}/${goalId}`,
			data,
		});
	}

	/**
	 * Delete a goal
	 *
	 * @param {String} goalId The goal id
	 */
	async delete(goalId: string) {
		return this._request.delete({
			endpoint: `${this.route}/${goalId}`,
		});
	}

	/**
	 * Create a key result
	 *
	 * @param {String} goalId The goal id
	 * @param {Object} data The key result data
	 */
	async createKeyResult(goalId: string, data: object) {
		return this._request.post({
			endpoint: `${this.route}/${goalId}/key_result`,
			data,
		});
	}
}
