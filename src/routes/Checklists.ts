import { Request } from '../structures/Request';
import { BaseRoute } from './BaseRoute';

export class Checklists extends BaseRoute {
	/**
	 * @constructor
	 * @param {Request} request A request instance
	 */

	constructor(request: Request) {
		super(request, 'checklist');
	}

	/**
	 * Update a checklist
	 *
	 * @param {String} checklistId The checklist id
	 * @param {Object} data The checklist data
	 */
	async update(checklistId: string, data: object) {
		return this._request.put({
			endpoint: `${this.route}/${checklistId}`,
			data,
		});
	}

	/**
	 * Delete a checklist
	 *
	 * @param {String} checklistId The checklist id
	 */
	async delete(checklistId: string) {
		return this._request.delete({
			endpoint: `${this.route}/${checklistId}`,
		});
	}

	/**
	 * Create a checklist item
	 *
	 * @param {String} checklistId The checklist id
	 * @param {Object} data The checklist item data
	 */
	async createChecklistItem(checklistId: string, data: object) {
		return this._request.post({
			endpoint: `${this.route}/${checklistId}/checklist_item`,
			data,
		});
	}

	/**
	 * Update a checklist item
	 *
	 * @param {String} checklistId The checklist id
	 * @param {String} checklistItemId The checklist item id
	 * @param {Object} data The checklist item data
	 */
	async updateChecklistItem(checklistId: string, checklistItemId: string, data: object) {
		return this._request.put({
			endpoint: `${this.route}/${checklistId}/checklist_item/${checklistItemId}`,
			data,
		});
	}

	/**
	 * Delete a checklist item
	 *
	 * @param {String} checklistId The checklist id
	 * @param {String} checklistItemId The checklist item id
	 */
	async deleteChecklistItem(checklistId: string, checklistItemId: string) {
		return this._request.delete({
			endpoint: `${this.route}/${checklistId}/checklist_item/${checklistItemId}`,
		});
	}
}
