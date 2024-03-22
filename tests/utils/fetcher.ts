export default class Fetcher {
    constructor(readonly url: string) { }
    static host: string = "http://localhost:"

    async execute(path: string, { body, headers, method, ...options}: RequestInit = { method: "GET" }) {
        const uri = this.url + path
        const response = await fetch(uri, {
            method: method,
            headers: {
                "Content-Type": "Application/json",
                ...headers
            },
            body: JSON.stringify(body),
            ...options,
        })
        if (!response.ok) throw new Error('bad request')
        return response
    }
}

type Options = {
    method?: "GET" | "POST",
    body?: any,
    headers?: HeadersInit
}