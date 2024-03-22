import LoginUser from "./application/useCases/LoginUser";
import SignUpUser from "./application/useCases/SignUpUser";
import Route from "./domain/Route";
import ExpressAdapter from "./infra/adapter/ExpressAdapter";
import Server from "./infra/http/Server";
import UserRepositoryInMemory from "./infra/repositories/UserRepositoryInMemory";

const PORT = Number(process.env.PORT) || 3000

const expressAdapter = new ExpressAdapter()
const serverHttp = new Server(expressAdapter)

const userRepository = new UserRepositoryInMemory()

const signupRoute = new Route('/user/signup', 'POST', async ({ body: { email, password, name } }) => {
    const signup = new SignUpUser(userRepository)
    const data = await signup.execute({ email, name, password })
    return { status: 200, data }
})

const loginUser = new Route('/user/login', 'GET', async ({ body: { email, password } }) => {
    const loginUser = new LoginUser(userRepository)
    const data = await loginUser.execute({ email, password })
    return { status: 200, data }
})

serverHttp.addRoute(signupRoute)
serverHttp.addRoute(loginUser)

export const server = serverHttp.listen(PORT)
