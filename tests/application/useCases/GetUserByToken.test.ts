import { beforeAll, describe, expect, it } from 'vitest'
import UserRepositoryInMemory from '../../../src/infra/repositories/UserRepositoryInMemory'
import GetUserByToken from "../../../src/application/useCases/GetUserByToken"
import User from '../../../src/domain/entity/User'

describe('GetUserByToken', () => {
    const expectedUserDto = { name: 'any_name', email: 'any_email@email.com' }
    const user = User.create({ ...expectedUserDto, password: "any_password" })
    const token = user.token
    let getUserByToken: GetUserByToken
    let userRepository: UserRepositoryInMemory
    
    beforeAll(() => {
        userRepository = new UserRepositoryInMemory()
        getUserByToken = new GetUserByToken(userRepository)
    })

    it('should return the null when not found token', async () => {
        const userDto = await getUserByToken.execute(token)
        expect(userDto).toEqual(null)
    })
    it('should return the userDto by token', async () => {
        await userRepository.add(user)
        const userDto = await getUserByToken.execute(token)
        expect(userDto).toEqual(expectedUserDto)
    })
})