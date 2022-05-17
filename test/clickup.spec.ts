import { assert } from 'chai';
import { Clickup } from '../src';
import {
	Authorization,
	Checklists,
	Comments,
	Folders,
	Goals,
	KeyResults,
	Lists,
	Spaces,
	Tasks,
	Teams,
	Views,
	Webhooks,
} from '../src/routes';

const token = 'token';

describe('Testing Clickup Client Instance', () => {
	let clickup: Clickup;
	before(() => {
		clickup = new Clickup(token);
	});

	it('should construct a Clickup instance', () => {
		assert.instanceOf(clickup, Clickup);
	});

	it('should have default prefix url', () => {
		const { prefixUrl } = clickup._service.getOptions();
		assert.strictEqual(prefixUrl, 'https://api.clickup.com/api/v2/');
	});

	it('should have default headers', () => {
		const headers = clickup._service.getHeaders();
		assert.property(headers, 'authorization');
		assert.property(headers, 'content-type');
		assert.strictEqual(headers.authorization, token);
		assert.strictEqual(headers['content-type'], 'application/json');
	});

	it('should have the default response type', () => {
		const { responseType } = clickup._service.getOptions();
		assert.strictEqual(responseType, 'json');
	});

	it('should instantiate all routes', () => {
		assert.instanceOf(clickup.authorization, Authorization);
		assert.instanceOf(clickup.checklists, Checklists);
		assert.instanceOf(clickup.comments, Comments);
		assert.instanceOf(clickup.folders, Folders);
		assert.instanceOf(clickup.goals, Goals);
		assert.instanceOf(clickup.keyResults, KeyResults);
		assert.instanceOf(clickup.lists, Lists);
		assert.instanceOf(clickup.spaces, Spaces);
		assert.instanceOf(clickup.tasks, Tasks);
		assert.instanceOf(clickup.teams, Teams);
		assert.instanceOf(clickup.views, Views);
		assert.instanceOf(clickup.webhooks, Webhooks);
	});
});

describe('Testing Client Got Options', () => {
	let clickup: Clickup;
	before(() => {
		clickup = new Clickup(token, {
			hooks: {
				beforeRequest: [
					(options) => {
						options.headers.foo = 'bar';
					},
				],
			},
		});
	});

	it('should have beforeRequest hook(s)', () => {
		const { hooks } = clickup._service.getOptions();
		assert.isArray(hooks.beforeRequest);
		assert.lengthOf(hooks.beforeRequest, 1);
	});
});
