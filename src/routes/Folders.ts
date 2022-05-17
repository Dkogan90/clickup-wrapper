import { Request } from '../structures/Request';
import { BaseRoute } from './BaseRoute';

export class Folders extends BaseRoute {
	/**
	 * @constructor
	 * @param {Request} request A request instance
	 */
	constructor(request: Request) {
		super(request, 'folder');
	}

	/**
	 * Get a folder
	 *
	 * @param {Number} folderId The folder id
	 */
	async get(folderId: number) {
		return this._request.get({
			endpoint: `${this.route}/${folderId}`,
		});
	}

	/**
	 * Update a folder
	 *
	 * @param {Number} folderId The folder id
	 * @param {Object} data The folder data
	 */
	async update(folderId: number, data: object) {
		return this._request.put({
			endpoint: `${this.route}/${folderId}`,
			data,
		});
	}

	/**
	 * Delete a folder
	 *
	 * @param {Number} folderId The folder id
	 */
	async delete(folderId: number) {
		return this._request.delete({
			endpoint: `${this.route}/${folderId}`,
		});
	}

	/**
	 *Add a guest to a folder
	 *
	 * @param {Number} folderId The folder id
	 * @param {Number} guestId The guest id
	 * @param {Object} data The guest data
	 */
	async addGuest(folderId: number, guestId: number, data: object) {
		return this._request.post({
			endpoint: `${this.route}/${folderId}/guest/${guestId}`,
			data,
		});
	}

	/**
	 * Remove a guest from a folder
	 *
	 * @param {Number} folderId The folder id
	 * @param {Number} guestId The guest id
	 */
	async removeGuest(folderId: number, guestId: number) {
		return this._request.delete({
			endpoint: `${this.route}/${folderId}/guest/${guestId}`,
		});
	}

	/**
	 * Create a list
	 *
	 * @param {Number} folderId The folder id
	 * @param {Object} data The list data
	 */
	async createList(folderId: number, data: object) {
		return this._request.post({
			endpoint: `${this.route}/${folderId}/list`,
			data,
		});
	}

	/**
	 * Get all lists in a folder
	 *
	 * @param {Number} folderId The folder id
	 * @param {Boolean} [archived=false] If archived lists should be returned or not
	 */
	async getLists(folderId: number, archived = false) {
		return this._request.get({
			endpoint: `${this.route}/${folderId}/list`,
			params: {
				archived: new Boolean(archived).toString(),
			},
		});
	}

	/**
	 * Create a view for a folder
	 *
	 * @param {Number} folderId The folder id
	 * @param {Object} data The view data
	 */
	async createView(folderId: number, data: object) {
		return this._request.post({
			endpoint: `${this.route}/${folderId}/view`,
			data,
		});
	}

	/**
	 * Get all views for a folder
	 *
	 * @param {Number} folderId The folder id
	 */
	async getViews(folderId: number) {
		return this._request.get({
			endpoint: `${this.route}/${folderId}/view`,
		});
	}
}


