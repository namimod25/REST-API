import express, { Application, Router } from 'express';
import { routes } from './routes';

const app: Application = express();
const port: Number = 3232;

routes(app);
app.listen(port, () => console.log(`Server berjalan port ${port}`));
