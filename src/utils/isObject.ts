export interface IIsObject {
	(item: any): boolean;
}

export interface IObject {
	[key: string]: any;
}

export interface IDeepMerge {
	(target: IObject, ...sources: Array<IObject>): IObject;
}

/**
 * @description Method to check if an item is an object. Date and Function are considered
 * an object, so if you need to exclude those, please update the method accordingly.
 * @param item - The item that needs to be checked
 * @return {Boolean} Whether or not @item is an object
 */
export const isObject: IIsObject = (item: any): boolean => {
	return item === Object(item) && !Array.isArray(item);
};
