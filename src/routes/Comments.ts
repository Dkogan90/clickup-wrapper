import { Request } from '../structures/Request';
import { BaseRoute } from './BaseRoute';

export class Comments extends BaseRoute {
	/**
	 * @constructor
	 * @param {Request} request A request instance
	 */
	constructor(request: Request) {
		super(request, 'comment');
	}

	/**
	 * Update a comment
	 *
	 * @param {Number} commentId The comment id
	 * @param {Object} data The comment data
	 */
	async update(commentId: string, data: object) {
		return this._request.put({
			endpoint: `${this.route}/${commentId}`,
			data,
		});
	}

	/**
	 * Delete a comment
	 *
	 * @param {Number} commentId The comment id
	 */
	async delete(commentId: string) {
		return this._request.delete({
			endpoint: `${this.route}/${commentId}`,
		});
	}
}
