export default class Fetcher {
    constructor(readonly url: string) { }
    static host: string = "http://localhost:"

    async execute(path: string, options: Options = { method: "GET" }) {
        const uri = this.url + path
        const header = {
            method: options.method,
            headers: {
                "Content-Type": "Application/json",
            },
            body: JSON.stringify(options.body)
        }
        const response = await fetch(uri, header)
        if (!response.ok) throw new Error('bad request')
        return response
    }
}

type Options = {
    method?: "GET" | "POST",
    body?: any,
}