import { GetByTokenRepository } from "../repository/Repository.interface"
import User from "../../domain/entity/User"

export default class GetUserByToken {
    constructor(readonly userRepository: GetUserByTokenRepository) { }
    
    async execute(token: string) {
        const user = await this.userRepository.getByToken(token)
        if(!user) return null
        return {
            name: user.name, 
            email: user.email, 
        }
    }
}

type GetUserByTokenRepository = GetByTokenRepository<User>