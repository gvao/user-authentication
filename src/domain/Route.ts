import { RequestFunction } from "./types";

export default class Route {
    constructor(
        public path: string,
        public method: 'GET' | 'POST',
        public requestFunction: RequestFunction,
    ) { }
}
