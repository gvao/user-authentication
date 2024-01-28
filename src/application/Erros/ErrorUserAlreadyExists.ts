export class ErrorUserAlreadyExists extends Error {
    constructor(email: string) {
        const message = `User ${email} already exists`
        super(message)
    }
}