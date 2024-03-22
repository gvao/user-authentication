import HttpClient from "../http/HttpClient.interface";
import Express, { Request, Response } from "express";
import http from 'http'
import Route from "../../domain/Route";

export default class ExpressAdapter implements HttpClient {
    app
    server: http.Server

    constructor() {
        this.app = Express()
        this.app.use(Express.json())
        this.server = http.createServer(this.app)
    }

    addRoute({ method = "GET", path, requestFunction }: Route): void {
        if (method === "POST") {
            this.app.post(path, callBack)
            return
        }
        this.app.get(path, callBack)
        return
        
        async function callBack(req: Request, res: Response) {
            const { headers, body, params, query } = req
            const { status, data } = await requestFunction({ headers, body, params, query })
            res.status(status).json(data)
        }
    }

    listen(port: number) {
        return this.server.listen(port, () => {
            // console.log(`listening on port ${port}: http://localhost:${port}`);
        })
    }

    on = (eventName: string, fn: (value: unknown) => void): void => { this.server.on(eventName, fn) }

}

