import { afterAll, beforeAll, describe, expect, it, test } from "vitest";
import { PORT, server } from "../../../src/infra/http/express";

describe('e2e', () => {
    const userFake = { email: 'any_email@email.com', password: 'any_password', name: 'any_name' }
    let tokenUserFake: string

    beforeAll(async () => {
        server.listen(PORT, () => {
            console.log(`listening on ${PORT}`)
        })

        await new Promise(resolve => server.on('listening', resolve))
    })

    describe('signup', () => {
        it('should returns token with signup user', async () => {
            const { token } = await fetcher('/signup', 'POST', {}, userFake)
            tokenUserFake = token
            expect(token).toBeDefined()
        })
    })

    describe('login', async () => {
        it('Should return token with login user', async () => {
            const { token } = await fetcher('/login', 'POST', {}, userFake)
            expect(token).toBe(tokenUserFake)
        })
    
        it('should return user with token', async () => {
            const expectedUser = { name: userFake.name, email: userFake.email }
            const { user } = await fetcher('/user', 'GET', { authorization: `Bearer ${tokenUserFake}` })
            expect(user).toEqual(expectedUser)
        })
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