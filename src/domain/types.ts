import http from 'http'

export type RequestFunction = (props: RequestFunctionProps) => Promise<ReturnRequest>
export interface RequestFunctionProps {
    headers?: http.IncomingHttpHeaders,
    body?: any,
    params?: any,
    query?: any,
}
export type ReturnRequest = { status: number, data: any }
