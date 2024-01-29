export type UserCreateProps = { email: string, password: string, name: string }
export type UserProps = UserCreateProps & { userId: string, token: string }

export default class User {
    userId: string
    name: string
    email: string;
    password: string;
    private _token: string;

    constructor({ name, email, password, userId, token }: UserProps) {
        if (!name) throw new Error('Name must be provided')
        this.name = name
        this.userId = userId
        this.email = email;
        this.password = password
        this._token = token
    }

    static create({ email, password, name }: UserCreateProps) {
        const userId = crypto.randomUUID()
        const token = crypto.randomUUID()
        return new User({ email, password, userId, token, name })
    }

    get token() {
        return this._token
    }
}
