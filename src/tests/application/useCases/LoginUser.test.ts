import { beforeAll, describe, expect, it } from "vitest";
import User from "../../../domain/entity/User";
import UserRepositoryInMemory from "../../../infra/repositories/UserRepositoryInMemory";
import LoginUser from "../../../application/useCases/LoginUser";
import { PasswordIncorrect } from "../../../application/Erros/PasswordIncorrect";


describe('LoginUser', () => {
    let userRepository: UserRepositoryInMemory
    let loginUser: LoginUser
    const email = 'any_email@gmail.com'
    const password = 'any_password'

    beforeAll(async () => {
        userRepository = new UserRepositoryInMemory()
        loginUser = new LoginUser(userRepository)
        const user = User.create({ email, password })
        await userRepository.add(user)

    })

    it('should login a user', async () => {
        const { token } = await loginUser.execute({ email, password })
        expect(token).toBeDefined()
    })

    it('should return error with incorrect password', async () => {
        expect(async () => {
            await loginUser.execute({ email, password: 'incorrect_password' })
        }).rejects.toThrowError(PasswordIncorrect)
    })
})