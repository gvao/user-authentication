import User from "../../domain/entity/User"

export interface AddRepository {
    add: (user: User) => Promise<void>
}