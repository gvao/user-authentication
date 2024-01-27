import { describe, expect, it } from 'vitest'
import SignUpUser from '../../../src/application/useCases/SignUpUser'
import UserRepositoryInMemory from '../../../src/infra/UserRepositoryInMemory'

describe('signup', () => {
    const userRepository = new UserRepositoryInMemory()
    const signUpUser = new SignUpUser(userRepository)

    it('sign up new user', async () => {
        const { token } = await signUpUser.execute({ email: 'any_email@email.com', password: 'any_password' })
        expect(token).toBeDefined()
        expect(userRepository.users).toHaveLength(1)
    })
})