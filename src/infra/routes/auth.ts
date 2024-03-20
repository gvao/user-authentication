import { NextFunction, Request, Response, Router } from "express"
import UserRepositoryInMemory from "../repositories/UserRepositoryInMemory"
import SignUpUser from "../../application/useCases/SignUpUser"
import LoginUser from "../../application/useCases/LoginUser"
import GetUserByToken from "../../application/useCases/GetUserByToken"

const authRoute = Router()
const userRepository = new UserRepositoryInMemory()

authRoute.post('/signup', async (req, res) => {
    const { email, password, name } = req.body
    const signupUser = new SignUpUser(userRepository)
    const { token } = await signupUser.execute({ email, password, name })
    res.status(200).json({
        token,
    })
})

authRoute.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body
        const loginUser = new LoginUser(userRepository)
        const { token } = await loginUser.execute({ email, password })
        res.status(200).json({
            token,
        })
    } catch (err) {
        console.error(err)
    }
})

authRoute.get('/user', async (req, res) => {
    const { authorization } = req.headers
    if (!authorization) {
        res.status(401).json({
            message: `authentication is required`
        })
        return
    }
    const [_, token] = authorization?.split(' ')
    const getUserByToken = new GetUserByToken(userRepository)
    const user = await getUserByToken.execute(token)
    res.status(200).json({ user })
})

authRoute.get('/users', (req, res) => {
    const users = userRepository.users
    res.status(200).json({
        users
    })
})

export function validToken(req: Request, res: Response, next: NextFunction){
    const { authorization } = req.headers
    if(!authorization) res.status(401).json({
        message: `not found token`
    })

    const hasBearerString = authorization?.match('Bearer')

    next()
}

export default authRoute