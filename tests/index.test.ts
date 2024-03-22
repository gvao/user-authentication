import { afterAll, describe, expect, it } from 'vitest'

import { server } from '../src'
import Fetcher from './utils/fetcher'

describe('e2e', () => {
    const url = Fetcher.host + '3000'
    const fetcher = new Fetcher(url)

    let fakeToken: string

    it('/user/signup', async () => {
        const input = { email: "any_email@gmail.com", password: "any_password", name: 'any_name' }
        const response = await fetcher.execute('/user/signup', { method: 'POST' })
        expect(response.status).toEqual(200)
        const json = await response.json()
        expect(json.token).toBeDefined()
        fakeToken = json.token
    })
    it('/user/login', async () => {
        const response = await fetcher.execute('/user/login', { method: 'GET', headers: { authentication: `Bearer ${fakeToken}` } })
        expect(response.ok).toBeTruthy();
        const result = await response.json()
        console.log(result)
        // expect(result.token).toBe
    })

    afterAll(() => {
        server.close(() => {
            // console.log('server closed!')
        })
    })
})