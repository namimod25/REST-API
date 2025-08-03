import express, { Application, Request, Response, NextFunction } from 'express'

const app: Application = express()
const port: Number = 3232

app.use('/koneksi', (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send({ data: 'Hello World' })
})
app.listen(port, () => console.log(`server is running on port ${port}`))
