import User from "./User"

export interface AddRepository {
    add: (user: User) => Promise<void>
}