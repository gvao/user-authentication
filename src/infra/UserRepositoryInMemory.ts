import { AddRepository, GetByEmail } from "../application/repository/Repository.interface"
import User from "../domain/entity/User"

export default class UserRepositoryInMemory implements UserRepository {
    users: User[] = []

    async getByEmail(email: string): Promise<User> { 
        const user = this.users.find(user => user.email === email)
        if(!user) throw new Error(`User ${email} not found`)
        return user
    }
    async add(user: User) {
        this.users.push(user)
    }
}

type UserRepository = AddRepository<User> & GetByEmail<User>