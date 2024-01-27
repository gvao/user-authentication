import { describe, expect, it } from 'vitest'
import { AddRepository } from '../src/Repository.interface'
import User from '../src/User'
import SignUpUser from '../src/SignUpUser'

export class UsersRepository implements AddRepository {
    users: User[] = []

    async add(user: User) {
        this.users.push(user)
    }
}



describe('signup', () => {
    const usersRepository = new UsersRepository()
    const signUpUser = new SignUpUser(usersRepository)

    it('sign up new user', async () => {
        const { token } = await signUpUser.execute({ email: 'any_email@email.com', password: 'any_password' })
        expect(token).toBeDefined()
        expect(usersRepository.users).toHaveLength(1)
    })
})