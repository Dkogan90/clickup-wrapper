import { assert } from 'chai';
import { buildSearchParams } from '../src/utils/buildSearchParams';
import { deepMerge } from '../src/utils/deepMerge';
import { isObject } from '../src/utils/isObject';

describe('Testing buildSearchParams util', () => {
	it('should construct an instance of URLSearchParams', () => {
		assert.instanceOf(buildSearchParams({}), URLSearchParams);
	});

	it('should build URLSearchParams to support LHS notation', () => {
		const params = {
			archive: false,
			order_by: 'due_date',
			'statuses[]': ['in progress', 'completed'],
		};

		const expectedOutput = new URLSearchParams([
			['archived', 'false'],
			['order_by', 'due_date'],
			['statuses[]', 'in progress'],
			['statuses[]', 'completed'],
		]);

		assert.deepEqual(buildSearchParams(params), expectedOutput);
	});
});

describe('Testing isObject util', () => {
	it('should be false for an array', () => {
		assert.isFalse(isObject([]));
	});

	it('should be false for an number', () => {
		assert.isFalse(isObject(1));
	});

	it('should be false for an string', () => {
		assert.isFalse(isObject('test'));
	});

	it('should be true for an object', () => {
		assert.isTrue(isObject({ id: 1 }));
	});
});

describe('Testing deepMerge util', () => {
	it('should merge source into object', () => {
		const object = {
			text: 'original',
			headers: {
				'Content-Type': 'application/json',
			},
		};
		const source1 = {
			id: 2,
			type: 'text',
			headers: {
				Authorization: 'token',
			},
		};
		const source2 = {
			id: 3,
			text: 'changed',
			headers: {
				'Content-Type': 'text/html',
			},
		};
		const expectedResult = {
			id: 3,
			text: 'changed',
			headers: {
				Authorization: 'token',
				'Content-Type': 'text/html',
			},
			type: 'text',
		};

		const mergeResult = deepMerge(object, source1, source2);
		assert.deepEqual(mergeResult, expectedResult);
	});
});
