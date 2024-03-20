import HttpClient, { AddRouteProps, RequestFunction } from "../http/HttpClient.interface";
import Express, { Request, RequestHandler, Response } from "express";
import http from 'http'

export default class ExpressAdapter implements HttpClient {
    app
    server: http.Server

    constructor() {
        this.app = Express()
        this.server = http.createServer(this.app)
    }

    addRoute({ method = "GET", path, requestFunction }: AddRouteProps): void {

        const callBack = async (req: Request, res: Response) => {
            const { headers, body, params, query } = req
            const { status, data } = await requestFunction({ headers, body, params, query })
            res.status(status).json(data)
        }

        if (method === "GET") {
            this.app.get(path, callBack)
            return
        }
    }

    listen(port: number) {
        return this.server.listen(port, () => {
            console.log(`listening on port ${port}: http://localhost:${port}`);
        })
    }

    on = (eventName: string, fn: (value: unknown) => void): void => { this.server.on(eventName, fn) }

}

