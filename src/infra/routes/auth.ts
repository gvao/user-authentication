import { Router } from "express"
import UserRepositoryInMemory from "../UserRepositoryInMemory"
import SignUpUser from "../../application/useCases/SignUpUser"
import LoginUser from "../../application/useCases/LoginUser"

const authRoute = Router()

const userRepository = new UserRepositoryInMemory()

authRoute.post('/signup', async (req, res) => {
    const { email, password } = req.body
    const signupUser = new SignUpUser(userRepository)
    const { token } = await signupUser.execute({ email, password })
    res.status(200).json({
        token,
    })
})

authRoute.post('/login', async (req, res) => {
    const { email, password } = req.body
    const loginUser = new LoginUser(userRepository)
    const { token } = await loginUser.execute({ email, password })
    res.status(200).json({
        token,
    })
})


export default authRoute