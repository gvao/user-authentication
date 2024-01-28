import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { PORT, server } from "../src";

describe('e2e', () => {
    const userFake = { email: 'any_email@email.com', password: 'any_password' }
    let tokenUserFake: string

    beforeAll(async () => {
        server.listen(PORT, () => {
            console.log(`listening on ${PORT}`)
        })

        await new Promise(resolve => server.on('listening', resolve))
    })

    it('should returns token with signup user', async () => {
        const { token } = await fetcher('/signup', 'POST', {}, userFake)
        tokenUserFake = token
        expect(token).toBeDefined()
    })

    it('Should return token with login user', async () => {
        const { token } = await fetcher('/login', 'POST', {}, userFake)
        expect(token).toBe(tokenUserFake)
    })

    it.skip('should return user with token', async () => {
        const { user } = await fetcher('/user', 'GET', { authorization: `Bearer ${tokenUserFake}` })
        expect(user).toBeDefined()
    })

    afterAll(async () => {
        server.close()
    })
})

async function fetcher(path: string, method: string = 'GET', headers?: HeadersInit, body?: any) {
    const response = await fetch(`http://localhost:3000/api${path}`, {
        method,
        headers: {
            "Content-Type": "Application/json",
            ...headers,
        },
        body: JSON.stringify(body)
    })
    return await response.json()
}