import { beforeEach, describe, expect, it } from 'vitest'
import SignUpUser from '../../../src/application/useCases/SignUpUser'
import UserRepositoryInMemory from '../../../src/infra/repositories/UserRepositoryInMemory'
import User from '../../../src/domain/entity/User'
import { ErrorUserAlreadyExists } from '../../../src/application/Erros/ErrorUserAlreadyExists'

describe('signup', () => {
    let userRepository: UserRepositoryInMemory
    let signUpUser: SignUpUser
    const userExistence = User.create({ email: 'user_existence@email.com', password: 'any_password', name: 'any_name' })

    beforeEach(async () => {
        userRepository = new UserRepositoryInMemory()
        signUpUser = new SignUpUser(userRepository)

        await userRepository.add(userExistence)
    })

    it('sign up new user', async () => {
        const { token } = await signUpUser.execute({ email: 'any_email@email.com', password: 'any_password', name: 'any_name' })
        expect(token).toBeDefined()
        expect(userRepository.users).toHaveLength(2)
    })

    it('should return an error if the user exists', async () => {
        expect(async () => {
            await signUpUser.execute({ email: userExistence.email, password: userExistence.password, name: userExistence.name })
        }).rejects.toThrowError(ErrorUserAlreadyExists)
    })
})