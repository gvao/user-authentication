import Express from 'express'
import cors from 'cors'
import { createServer } from 'http'

import authRoute from '../routes/auth'
import path from 'path'

const app = Express()
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(Express.json())
app.use('/api', authRoute)
app.use(Express.static(path.join(__dirname, '../../../public/dist')))

const server = createServer(app)

export { server, PORT } 