import User, { UserCreateProps } from "../../domain/entity/User"
import { ErrorUserAlreadyExists } from "../Erros/ErrorUserAlreadyExists"
import { AddRepository, GetByEmail } from "../repository/Repository.interface"

export default class SignUpUser {
    constructor(readonly userRepository: AddRepository<User> & GetByEmail<User>) { }

    async execute({ email, password, name }: Input): Promise<Output> {
        const user = User.create({ email, password, name })
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

type Input = UserCreateProps
type Output = { token: string }
