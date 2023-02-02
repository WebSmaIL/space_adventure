import dotenv from 'dotenv'
import express, { Express, Request, Response } from 'express'
import path from 'path'
import cors from 'cors'
import { leadersRouter, testRouter, userRouter } from './routes'

dotenv.config()

const app: Express = express()

app.use(express.json())
app.use(cors())

// ROUTERS
app.use('/test', testRouter)
app.use('/api', userRouter)
app.use('/api', leadersRouter)

const port = process.env.PORT || 8000

app.listen(port, () => {
    console.log(`Server listening on ${port} port`)
})
