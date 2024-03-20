import Express from 'express'
import cors from 'cors'
import { createServer } from 'http'

import authRoute from '../routes/auth'
import clientRoutes from '../routes/clients'

import path from 'path'

const app = Express()

app.use(cors())
app.use(Express.json())
app.use('/api', authRoute)
app.use('/api', clientRoutes)
app.use(Express.static(path.join(__dirname, '../../../public/dist')))

const server = createServer(app)

export { server }