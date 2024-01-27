export class PasswordIncorrect extends Error {
    constructor(password: string) {
        const message = `Password ${password} is incorrect`
        super(message)
    }
}