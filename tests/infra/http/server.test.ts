import { afterAll, beforeAll, describe, expect, it } from "vitest"
import http from 'http'

import Server from "../../../src/infra/http/Server"
import ExpressAdapter from "../../../src/infra/adapter/ExpressAdapter"
import fetcher from "../../utils/fetcher"

const _PORT = 3333

describe('Server', () => {
    let _server: http.Server<typeof http.IncomingMessage, typeof http.ServerResponse>

    beforeAll(async () => {
        const expressAdapter = new ExpressAdapter()
        const server = new Server(expressAdapter)
        _server = server.listen(_PORT)

        server.addRoute('/', function () {
            return {
                status: 200,
                data: {
                    message: 'any_message'
                }
            }
        })

        await new Promise(resolve => _server.on('listening', resolve))
    })

    it('should ', async () => {
        const response = await fetcher('/')
        expect(response.ok).toBeTruthy()
        expect(response.status).toBe(200)
        const json = await response.json()
        expect(json.message).toBe('any_message')
    })

    afterAll(async () => {
        _server.close(() => {
            console.log('server closed')
        })
    })
})

