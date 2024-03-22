import http from 'http'
import Route from '../../domain/Route';

export default interface HttpClient {
    listen(port: number): http.Server<typeof http.IncomingMessage, typeof http.ServerResponse>;
    on(eventName: string, fn: (value: unknown) => void): void
    addRoute({ method, path, requestFunction }: Route): void
}

