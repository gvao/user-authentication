import { AddRepository, GetByEmail } from "../../application/repository/Repository.interface"
import User from "../../domain/entity/User"

export default class UserRepositoryInMemory implements UserRepository {
    users: User[] = []

    async getByEmail(email: string): Promise<User | null> { 
        const user = this.users.find(user => user.email === email)
        if(!user) return null
        return user
    }
    async add(user: User) {
        this.users.push(user)
    }
}

type UserRepository = AddRepository<User> & GetByEmail<User>