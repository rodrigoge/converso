import express, { Request, Response } from 'express'
import dotenv from 'dotenv'
dotenv.config()

const app = express()
const baseUrl = process.env.BASE_URL

app.use(express.json())

app.get(`${baseUrl}/ping`, (req: Request, res: Response) => {
    res.send('Hello world')
})

app.listen(3000, () => {
    console.log('Server running in port 3000')
})