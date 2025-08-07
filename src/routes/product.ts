import { Router, Request, Response, NextFunction } from 'express';
import { logger } from '../utils/logger';

export const ProductRouter: Router = Router();

ProductRouter.get('/', (req: Request, res: Response) => {
  logger.info('success get data');
  res.status(200).send({
    status: true,
    statusCode: 200,
    data: [{ name: 'Sepatu Futsal', price: 250000 }],
  });
});
ProductRouter.post('/', (req: Request, res: Response, next: NextFunction) => {
  logger.info('success Add new product');
  res.status(200).send({status: true, statusCode: 200, data: req.body})
})
