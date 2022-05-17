import { createReadStream, PathLike } from 'fs';
import FormData from 'form-data';
import { BaseRoute } from './BaseRoute';
import { Request } from '../structures/Request';
import { RequestParams } from '../utils/buildSearchParams';

export class Tasks extends BaseRoute {
	/**
	 * @constructor
	 * @param {Request} request A request instance
	 */
	constructor(request: Request) {
		super(request, 'task');
	}

	/**
	 * Get a task
	 *
	 * @param {String} taskId The task id
	 * @param {Object} [options] The parameter options to pass in
	 */
	async get(taskId: string, options?: RequestParams) {
		return this._request.get({
			endpoint: `${this.route}/${taskId}`,
			params: options,
		});
	}

	/**
	 * Update a task
	 *
	 * @param {String} taskId The task id
	 * @param {Object} data The task data
	 * @param {Object} [options] The parameter options to pass in
	 */
	async update(taskId: string, data: object, options?: RequestParams) {
		return this._request.put({
			endpoint: `${this.route}/${taskId}`,
			params: options,
			data,
		});
	}

	/**
	 * Delete a task
	 *
	 * @param {String} taskId The task id
	 * @param {Object} [options] The parameter options to pass in
	 */
	async delete(taskId: string, options?: RequestParams) {
		return this._request.delete({
			endpoint: `${this.route}/${taskId}`,
			params: options,
		});
	}

	/**
	 * Add an attachment to a task
	 *
	 * @param {String} taskId The task id
	 * @param {Object} fileSettings The file settings
	 * @param {String} fileSettings.filePath The path to the file
	 * @param {String} fileSettings.fileName The name of the attachment file along with its extension type. Example: 'notes.txt'
	 * @param {Object} [options] The parameter options to pass in
	 */
	async addAttachment(
		taskId: string,
		fileSettings: {
			filePath: PathLike;
			fileName: string;
		},
		options?: RequestParams
	) {
		// ensure fileSettings are provided

		// building form-data
		const form = new FormData();
		form.append('filename', fileSettings.fileName);
		form.append('attachment', createReadStream(fileSettings.filePath));

		// setting headers
		const headers = form.getHeaders();
		headers.authorization = this._request.getToken();

		return this._request.post({
			endpoint: `${this.route}/${taskId}/attachment`,
			params: options,
			data: form,
			headers,
		});
	}

	/**
	 * Add a comment to as task
	 *
	 * @param {String} taskId The task id
	 * @param {Object} data The comment data
	 * @param {Object} [options] The parameter options to pass in
	 */
	async addComment(taskId: string, data: object, options?: RequestParams) {
		return this._request.post({
			endpoint: `${this.route}/${taskId}/comment`,
			params: options,
			data,
		});
	}

	/**
	 * Get all comments on a task
	 *
	 * @param {String} taskId The task id
	 * @param {Object} [options] The parameter options to pass in
	 */
	async getComments(taskId: string, options?: RequestParams) {
		return this._request.get({
			endpoint: `${this.route}/${taskId}/comment`,
			params: options,
		});
	}

	/**
	 * Create a checklist in a task
	 *
	 * @param {String} taskId The task id
	 * @param {Object} data The checklist data
	 * @param {Object} [options] The parameter options to pass in
	 */
	async createChecklist(taskId: string, data: object, options?: RequestParams) {
		return this._request.post({
			endpoint: `${this.route}/${taskId}/checklist`,
			params: options,
			data,
		});
	}

	/**
	 * Add a custom field value for a task
	 *
	 * @param {String} taskId The task id
	 * @param {String} fieldId The custom field id
	 * @param {Object} data The custom field data
	 * @param {Object} [options] The parameter options to pass in
	 */
	async addCustomFieldValue(taskId: string, fieldId: string, data: object, options?: RequestParams) {
		return this._request.post({
			endpoint: `${this.route}/${taskId}/field/${fieldId}`,
			params: options,
			data,
		});
	}

	/**
	 * Delete a custom field value for a task
	 *
	 * @param {String} taskId The task id
	 * @param {String} fieldId The custom field id
	 * @param {Object} [options] The parameter options to pass in
	 */
	async deleteCustomFieldValue(taskId: string, fieldId: string, options?: RequestParams) {
		return this._request.delete({
			endpoint: `${this.route}/${taskId}/field/${fieldId}`,
			params: options,
		});
	}

	/**
	 * Create a dependency for a task
	 *
	 * @param {String} taskId The task id
	 * @param {Object} data The dependency data
	 * @param {Object} [options] The parameter options to pass in
	 */
	async addDependency(taskId: string, data: object, options?: RequestParams) {
		return this._request.post({
			endpoint: `${this.route}/${taskId}/dependency`,
			params: options,
			data,
		});
	}

	/**
	 * Delete a dependency for a task
	 *
	 * @param {String} taskId The task id
	 * @param {Object} options The parameter options to pass in
	 */
	async deleteDependency(taskId: string, options?: RequestParams) {
		return this._request.delete({
			endpoint: `${this.route}/${taskId}/dependency`,
			params: options,
		});
	}

	/**
	 * Add a task link
	 *
	 * @param {String} taskId The task id
	 * @param {String} linksTo The id of the task to link to
	 * @param {Object} [options] The parameter options to pass in
	 */
	async addTaskLink(taskId: string, linksTo: string, options?: RequestParams) {
		return this._request.post({
			endpoint: `${this.route}/${taskId}/link/${linksTo}`,
			params: options,
		});
	}

	/**
	 * Delete a task link
	 *
	 * @param {String} taskId The task id
	 * @param {String} linksTo The id of the task to link to
	 * @param {String} [options] The parameter options to pass in
	 */
	async deleteTaskLink(taskId: string, linksTo: string, options?: RequestParams) {
		return this._request.delete({
			endpoint: `${this.route}/${taskId}/link/${linksTo}`,
			params: options,
		});
	}

	/**
	 * Add a guest to a task
	 *
	 * @param {String} taskId The task id
	 * @param {Number} guestId The guest id
	 * @param {Object} data The guest data
	 * @param {Object} [options] The parameter options to pass in
	 */
	async addGuest(taskId: string, guestId: number, data: object, options?: RequestParams) {
		return this._request.post({
			endpoint: `${this.route}/${taskId}/guest/${guestId}`,
			params: options,
			data,
		});
	}

	/**
	 * Remove a guest from a task
	 *
	 * @param {String} taskId The task id
	 * @param {Number} guestId The guest id
	 * @param {Object} [options] The parameter options to pass in
	 */
	async removeGuest(taskId: string, guestId: number, options?: RequestParams) {
		return this._request.delete({
			endpoint: `${this.route}/${taskId}/guest/${guestId}`,
			params: options,
		});
	}

	/**
	 * Get all members of a task
	 *
	 * @param {String} taskId The task id
	 */
	async getMembers(taskId: string) {
		return this._request.get({
			endpoint: `${this.route}/${taskId}/member`,
		});
	}

	/**
	 * Add a tag to a task
	 *
	 * @param {String} taskId The task id
	 * @param {String} tagName The tag name
	 * @param {Object} [options] The parameter options to pass in
	 */
	async addTag(taskId: string, tagName: string, options?: RequestParams) {
		return this._request.post({
			endpoint: `${this.route}/${taskId}/tag/${tagName}`,
			params: options,
		});
	}

	/**
	 * Remove a tag from a task
	 *
	 * @param {String} taskId The task id
	 * @param {String} tagName The tag name
	 * @param {Object} [options] The parameter options to pass in
	 */
	async removeTag(taskId: string, tagName: string, options?: RequestParams) {
		return this._request.delete({
			endpoint: `${this.route}/${taskId}/tag/${tagName}`,
			params: options,
		});
	}

	/**
	 * Track time for a task (Time Tracking Legacy API)
	 *
	 * @param {String} taskId The task id
	 * @param {Object} data The time tracking data
	 * @param {Object} [options] The parameter options to pass in
	 */
	async trackTime(taskId: string, data: object, options?: RequestParams) {
		return this._request.post({
			endpoint: `${this.route}/${taskId}/time`,
			params: options,
			data,
		});
	}

	/**
	 * Get tracked time for a task (Time Tracking Legacy API)
	 *
	 * @param {String} taskId The task id
	 * @param {Object} [options] The parameter options to pass in
	 */
	async getTrackedTime(taskId: string, options?: RequestParams) {
		return this._request.get({
			endpoint: `${this.route}/${taskId}/time`,
			params: options,
		});
	}

	/**
	 * Edit tracked time for a task (Time Tracking Legacy API)
	 *
	 * @param {String} taskId The task id
	 * @param {String} intervalId The interval id
	 * @param {Object} data The time tracking data
	 * @param {Object} [options] The parameter options to pass in
	 */
	async editTrackedTime(taskId: string, intervalId: string, data: object, options?: RequestParams) {
		return this._request.put({
			endpoint: `${this.route}/${taskId}/time/${intervalId}`,
			params: options,
			data,
		});
	}

	/**
	 * Delete tracked time for a task
	 *
	 * @param {String} taskId The task id
	 * @param {String} intervalId The interval id
	 * @param {Object} [options] The parameter options to pass in
	 */
	async deleteTrackedTime(taskId: string, intervalId: string, options?: RequestParams) {
		return this._request.delete({
			endpoint: `${this.route}/${taskId}/time/${intervalId}`,
			params: options,
		});
	}

	/**
	 * Get tasks time in status
	 *
	 * @param {String} taskId The task id
	 * @param {Object} options The parameter options to pass in
	 */
	async getTimeInStatus(taskId: string, options?: RequestParams) {
		return this._request.get({
			endpoint: `${this.route}/${taskId}/time_in_status`,
			params: options,
		});
	}

	/**
	 * Get bulk tasks time in status
	 *
	 * @param {Object} options The parameter options to pass in
	 */
	async getBulkTimeInStatus(options?: RequestParams) {
		return this._request.get({
			endpoint: `${this.route}/bulk_time_in_status/task_ids`,
			params: options,
		});
	}
}
