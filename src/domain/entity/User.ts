type UserCreateProps = { email: string, password: string }
type UserProps = UserCreateProps & {
    userId: string, token: string
}

export default class User {
    userId: string
    email: string;
    password: string;
    private _token: string;

    constructor({ email, password, userId , token}: UserProps) {
        this.userId = userId
        this.email = email;
        this.password = password
        this._token = token
    }

    static create({ email, password }: UserCreateProps) {
        const userId = crypto.randomUUID()
        const initialToken = User.generateToken()
        return new User({ email, password, userId, token: initialToken })
    }

    static generateToken(){
        return crypto.randomUUID()
    }

    get token() {
        return this._token
    }
}
