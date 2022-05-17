import { Request } from '../structures/Request';

export class BaseRoute {
	protected readonly _request: Request;
	public readonly route: string;

	constructor(request: Request, route: string) {
		this._request = request;
		this.route = route;
	}
}
