import User from "../../domain/entity/User"
import { PasswordIncorrect } from "../Erros/PasswordIncorrect"
import { GetByEmail } from "../repository/Repository.interface"

export default class LoginUser {
    constructor(readonly usersRepository: GetByEmail<User>) { }

    async execute({ email, password }: Input): Promise<Output> {
        const user = await this.usersRepository.getByEmail(email)

        if (!user) throw new Error(`User ${email} not found`)
        if (user.password !== password) throw new PasswordIncorrect(password)

        return {
            token: user.token
        }
    }
}
type Input = { email: string, password: string }
type Output = { token: string }
