import { RequestHandler } from 'express';
import http from 'http'

export default interface HttpClient {
    listen(port: number): http.Server<typeof http.IncomingMessage, typeof http.ServerResponse>;
    on(eventName: string, fn: (value: unknown) => void): void
    addRoute({ method, path, requestFunction }: AddRouteProps): void
}

export interface RequestFunctionProps {
    headers?: http.IncomingHttpHeaders,
    body?: any,
    params?: any,
    query?: any,
}
export type RequestFunction = (props?: RequestFunctionProps) => ReturnRequest | Promise<ReturnRequest>
export type ReturnRequest = { status: number, data: any }
export interface AddRouteProps {
    method: 'GET' | 'POST',
    path: string,
    requestFunction: RequestFunction
}