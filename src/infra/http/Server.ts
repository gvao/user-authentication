import http, { IncomingMessage, ServerResponse } from "http";
import HttpClient, { RequestFunction } from "./HttpClient.interface";

export default class Server {
    private server?: http.Server<typeof IncomingMessage, typeof ServerResponse>

    constructor(readonly httpClient: HttpClient) { }

    listen(port: number) {
        this.server = this.httpClient.listen(port)
        return this.server
    }

    on = (eventName: string, fn: (args?: unknown) => void) => { this.server?.on(eventName, fn) }

    addRoute(path: string, requestFunction: RequestFunction, method: 'GET' = 'GET') {

        this.httpClient.addRoute({
            method,
            path,
            requestFunction
        })
    }
}
