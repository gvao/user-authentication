import http, { IncomingMessage, ServerResponse } from "http";
import HttpClient from "./HttpClient.interface";
import Route from "../../domain/Route";

export default class Server {
    private server?: http.Server<typeof IncomingMessage, typeof ServerResponse>

    constructor(readonly httpClient: HttpClient) { }

    listen(port: number) {
        this.server = this.httpClient.listen(port)
        return this.server
    }
    on = (eventName: string, fn: (args?: unknown) => void) => { this.server?.on(eventName, fn) }

    addRoute({ method, path, requestFunction }: Route) {
        this.httpClient.addRoute({ path, method, requestFunction, })
    }
}

