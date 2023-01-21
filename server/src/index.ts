import dotenv from 'dotenv'
import express, { Express, Request, Response } from 'express'
import path from 'path'
import cors from 'cors'
import { testRouter } from './routes'

dotenv.config()

const app: Express = express()

app.use(express.json())
app.use(cors())

// ROUTERS
app.use('/test', testRouter)

const port = process.env.PORT || 8000

app.listen(port, () => {
    console.log(`Server listening on ${port} port`)
})
