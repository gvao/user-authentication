import { AddRepository, GetByEmail, GetByTokenRepository } from "../../application/repository/Repository.interface"
import User from "../../domain/entity/User"

export default class UserRepositoryInMemory implements UserRepository {
    users: User[] = []

    async getByToken(token: string): Promise<User | null> {
        const user = this.users.find(user => user.token === token)
        return user || null
    }

    async getByEmail(email: string): Promise<User | null> { 
        const user = this.users.find(user => user.email === email)
        if(!user) return null
        return user
    }
    async add(user: User) {
        this.users.push(user)
    }
}

type UserRepository = AddRepository<User> 
    & GetByEmail<User> 
    & GetByTokenRepository<User>