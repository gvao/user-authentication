import User from "../../domain/entity/User"
import { ErrorUserAlreadyExists } from "../Erros/ErrorUserAlreadyExists"
import { AddRepository, GetByEmail } from "../repository/Repository.interface"

export default class SignUpUser {
    constructor(readonly userRepository: AddRepository<User> & GetByEmail<User>) { }

    async execute({ email, password }: Input): Promise<Output> {
        const user = User.create({ email, password })
        const userExistence = await this.userRepository.getByEmail(user.email)
        if (!!userExistence) {
            throw new ErrorUserAlreadyExists(email)
        }
        await this.userRepository.add(user)
        return {
            token: user.token
        }
    }
}

type Input = { email: string, password: string }
type Output = { token: string }
