import express, { Application, Request, Response } from 'express';

const app: Application = express();
const port: Number = 3232;

app.use('/healt', (_req: Request, res: Response) => {
  res.status(200).send({ data: 'hello' });
});

app.listen(port, () => console.log(`Server berjalan port ${port}`));

export default app;
