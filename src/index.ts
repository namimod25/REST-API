import express, { Application, Router } from 'express';
import { routes } from './routes/index.routes';
import { logger } from './utils/logger';
import bodyParser from 'body-parser';
import cors from 'cors';

const app: Application = express();
const port: Number = 3232;

//parse body request
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// cors handler
app.use(cors());
app.use((req, res, next) => {
  res.setHeader('Aceess-Control-Allow-Origin', '*');
  res.setHeader('Aceess-Control-Allow-Methods', '*');
  res.setHeader('Aceess-Control-Allow-Headers', '*');
  next();
});

routes(app);
app.listen(port, () => logger.info(`Server berjalan port ${port}`));
