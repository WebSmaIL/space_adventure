import dotenv from 'dotenv'
import express, { Express } from 'express'
import path from 'path'
import cors from 'cors'
import { leadersRouter, planetsRouter, userRouter, spaceshipsRouter } from './routes'

dotenv.config()

const app: Express = express()

app.use(express.json())
app.use(cors())

// ROUTERS
app.use('/api', userRouter)
app.use('/api', leadersRouter)
app.use('/api', planetsRouter)
app.use('/api', spaceshipsRouter)

const port = process.env.PORT || 8000

app.listen(port, () => {
    console.log(`Server listening on ${port} port`)
})

