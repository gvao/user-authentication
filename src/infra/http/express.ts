import Express from 'express'
import { createServer } from 'http'

import authRoute from '../routes/auth'

const app = Express()
const PORT = process.env.PORT || 3000

app.use(Express.json())
app.use('/api', authRoute)

const server = createServer(app)

export { server, PORT } 