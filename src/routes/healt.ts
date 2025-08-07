import { Router, Request, Response } from 'express';
import { logger } from '../utils/logger';

export const HealthRouter: Router = Router();

HealthRouter.get('/', (req: Request, res: Response) => {
  logger.info('success mengambil data');
  res.status(200).send({
    status: true,
    statusCode: 200,
    data: [{ name: '200' }],
  });
});
