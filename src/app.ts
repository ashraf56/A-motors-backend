
import express, { Request, Response } from 'express';
import cors from 'cors'
import cookieParser from 'cookie-parser';
const app = express()

app.use(cors())
app.use(express.json())
app.use(cookieParser())
app.use('/api/v1',)


app.get('/', (req: Request, res: Response) => {
  res.send('Hello  World!')
})




export default app;