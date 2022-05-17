import { Request } from '../structures/Request';
import { BaseRoute } from './BaseRoute';

export class Webhooks extends BaseRoute {
	/**
	 * @constructor
	 * @param {Request} request A request instance
	 */
	constructor(request: Request) {
		super(request, 'webhook');
	}

	/**
	 * Update a webhook
	 *
	 * @param {String} webhookId The webhook id
	 * @param {Object} data The webhook data
	 */
	async update(webhookId: string, data: object) {
		return this._request.put({
			endpoint: `${this.route}/${webhookId}`,
			data,
		});
	}

	/**
	 * Delete a webhook
	 *
	 * @param {String} webhookId The webhook id
	 */
	async delete(webhookId: string) {
		return this._request.delete({
			endpoint: `${this.route}/${webhookId}`,
		});
	}
}
