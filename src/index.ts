import ExpressAdapter from "./infra/adapter/ExpressAdapter";
import Server from "./infra/http/Server";

const PORT = Number(process.env.PORT) || 3000

const expressAdapter = new ExpressAdapter()
const serverHttp = new Server(expressAdapter)

serverHttp.addRoute('/test', () => {
    return {
        status: 200,
        data: {
            message: `test`
        }
    }
})

export const server = serverHttp.listen(PORT)
