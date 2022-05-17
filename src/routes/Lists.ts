import { Request } from '../structures/Request';
import { RequestParams } from '../utils/buildSearchParams';
import { BaseRoute } from './BaseRoute';

export class Lists extends BaseRoute {
	/**
	 * @constructor
	 * @param {Request} request A request instance
	 */
	constructor(request: Request) {
		super(request, 'list');
	}

	/**
	 * Get a list
	 *
	 * @param {Number} listId The list id
	 */
	async get(listId: number) {
		return this._request.get({
			endpoint: `${this.route}/${listId}`,
		});
	}

	/**
	 * Update a list
	 *
	 * @param {Number} listId The list id
	 * @param {Object} data The list data
	 */
	async update(listId: number, data: object) {
		return this._request.put({
			endpoint: `${this.route}/${listId}`,
			data,
		});
	}

	/**
	 * Delete a list
	 *
	 * @param {Number} listId The list id
	 */
	async delete(listId: number) {
		return this._request.delete({
			endpoint: `${this.route}/${listId}`,
		});
	}

	/**
	 * Add a list comment
	 *
	 * @param {Number} listId The list id
	 * @param {Object} data The comment data
	 */
	async addComment(listId: number, data: object) {
		return this._request.post({
			endpoint: `${this.route}/${listId}/comment`,
			data,
		});
	}

	/**
	 * Get all comments on a list
	 *
	 * @param {Number} listId The list id
	 */
	async getComments(listId: number) {
		return this._request.get({
			endpoint: `${this.route}/${listId}/comment`,
		});
	}

	/**
	 * Get all accessible custom fields of a list
	 *
	 * @param {Number} listId The list id
	 */
	async getAccessibleCustomFields(listId: number) {
		return this._request.get({
			endpoint: `${this.route}/${listId}/field`,
		});
	}

	/**
	 * Add a guest to a list
	 *
	 * @param {Number} listId The list id
	 * @param {Number} guestId The guest id
	 * @param {Object} data The guest data
	 */
	async addGuest(listId: number, guestId: number, data: object) {
		return this._request.post({
			endpoint: `${this.route}/${listId}/guest/${guestId}`,
			data,
		});
	}

	/**
	 * Remove a guest from a list
	 *
	 * @param {Number} listId The list id
	 * @param {Number} guestId The guest id
	 */
	async removeGuest(listId: number, guestId: number) {
		return this._request.delete({
			endpoint: `${this.route}/${listId}/guest/${guestId}`,
		});
	}

	/**
	 * Get all members of a list
	 *
	 * @param {Number} listId The list id
	 */
	async getMembers(listId: number) {
		return this._request.get({
			endpoint: `${this.route}/${listId}/member`,
		});
	}

	/**
	 * Create a task
	 *
	 * @param {Number} listId The list id
	 * @param {Object} data The task data
	 */
	async createTask(listId: number, data: object) {
		return this._request.post({
			endpoint: `${this.route}/${listId}/task`,
			data,
		});
	}

	/**
	 * Get all tasks in a list
	 *
	 * @param {Number} listId The list id
	 * @param {Object} [options] The parameter options to pass in
	 */
	async getTasks(listId: number, options: RequestParams = {}) {
		// eslint-disable-next-line no-param-reassign
		options.archived = options.archived || 'false';
		return this._request.get({
			endpoint: `${this.route}/${listId}/task`,
			params: options,
		});
	}

	/**
	 * Create a task from a template
	 *
	 * @param {Number} listId The list id
	 * @param {String} templateId The template id
	 * @param {Object} data The task data
	 */
	async createTaskFromTemplate(listId: number, templateId: string, data: object) {
		return this._request.post({
			endpoint: `${this.route}/${listId}/taskTemplate/${templateId}`,
			data,
		});
	}

	/**
	 * Create a view for a list
	 *
	 * @param {Number} listId The list id
	 * @param {Object} data The view data
	 */
	async createView(listId: number, data: object) {
		return this._request.post({
			endpoint: `${this.route}/${listId}/view`,
			data,
		});
	}

	/**
	 * Get all views for a list
	 *
	 * @param {Number} listId The list id
	 */
	async getViews(listId: number) {
		return this._request.get({
			endpoint: `${this.route}/${listId}/view`,
		});
	}

	/**
	 * Add task to a list
	 *
	 * @param {Number} listId The list id
	 * @param {String} taskId The task id
	 */
	async addTaskToList(listId: number, taskId: string) {
		return this._request.post({
			endpoint: `${this.route}/${listId}/task/${taskId}`,
		});
	}

	/**
	 * Remove a task from a list
	 *
	 * @param {Number} listId The list id
	 * @param {String} taskId The task id
	 */
	async removeTaskFromList(listId: number, taskId: string) {
		return this._request.delete({
			endpoint: `${this.route}/${listId}/task/${taskId}`,
		});
	}

	/**
	 * Get list members
	 *
	 * @param {Number} listId The list id
	 */
	async getListMembers(listId: number) {
		return this._request.get({
			endpoint: `${this.route}/${listId}/member`,
		});
	}
}
