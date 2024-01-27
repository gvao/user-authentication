export interface AddRepository<T> {
    add: (user: T) => Promise<void>
}

export interface GetByEmail<T> {
    getByEmail: (email: string) => Promise<T>
}