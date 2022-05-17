import { Request } from "../structures/Request";
import { BaseRoute } from "./BaseRoute";

export class Views extends BaseRoute {
	/**
	 * @constructor
	 * @param {Request} request A request instance
	 */
	constructor(request : Request) {
		super(request, 'view');
	}

	/**
	 * Get a view
	 *
	 * @param {String} viewId The view id
	 */
	async get(viewId : string) {
		return this._request.get({
			endpoint: `${this.route}/${viewId}`,
		});
	}

	/**
	 * Update a view
	 *
	 * @param {String} viewId The view id
	 * @param {Object} data The view data
	 */
	async update(viewId : string, data : object) {
		return this._request.put({
			endpoint: `${this.route}/${viewId}`,
			data,
		});
	}

	/**
	 * Delete a view
	 *
	 * @param {String} viewId The view id
	 */
	async delete(viewId : string) {
		return this._request.delete({
			endpoint: `${this.route}/${viewId}`,
		});
	}

	/**
	 * Add a comment on a view
	 *
	 * @param {String} viewId The view id
	 * @param {Object} data The comment data
	 */
	async addComment(viewId : string, data : object) {
		return this._request.post({
			endpoint: `${this.route}/${viewId}/comment`,
			data,
		});
	}

	/**
	 * Get all comments on a view
	 *
	 * @param {String} viewId The view id
	 */
	async getComments(viewId : string) {
		return this._request.get({
			endpoint: `${this.route}/${viewId}/comment`,
		});
	}

	/**
	 * Get all tasks in a view
	 *
	 * @param {String} viewId The view id
	 * @param {Integer} [page=0] The page to get
	 */
	async getTasks(viewId : string, page = 0) {
		return this._request.get({
			endpoint: `${this.route}/${viewId}/task`,
			params: {
				page
			},
		});
	}
}


