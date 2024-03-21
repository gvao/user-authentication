// export default async function fetcher(
//     path: string,
//     method: "GET" | "POST" = "GET",
//     options: FetcherOptions = { port: 3000 }
// ) {
//     const url = `http://localhost:${options.port}${path}`
//     const response = await fetch(url, {
//         method,
//         headers: {
//             contentType: "application/json",
//         },
//         body: JSON.stringify(options.body)
//     })
//     if (!response.ok) throw new Error('bad request')
//     return response
// }


export default class Fetcher {
    constructor(readonly url: string) { }
    static host: string = "http://localhost:"
    
    async execute(path: string, options: Options = { method: "GET" }) {
        const uri = this.url + path
        const response = await fetch(uri, {
            method: options.method,
            headers: {
                contentType: "application/json",
            },
            body: JSON.stringify(options.body)
        })
        if (!response.ok) throw new Error('bad request')
        return response
    }
}

type Options = {
    method?: "GET" | "POST",
    body?: any,
}