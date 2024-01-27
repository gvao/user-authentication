import User from "../../domain/entity/User"
import { AddRepository } from "../repository/Repository.interface"

export default class SignUpUser {
    constructor(readonly userRepository: AddRepository<User>) { }

    async execute({ email, password }: Input): Promise<Output> {
        const user = User.create({ email, password })
        await this.userRepository.add(user)
        const token = user.token
        return {
            token
        }
    }
}

type Input = { email: string, password: string }
type Output = { token: string }
