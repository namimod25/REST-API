import { Router, Request, Response } from 'express';

export const ProductRouter: Router = Router();

ProductRouter.get('/', (req: Request, res: Response) => {
  res.status(200).send({
    status: true,
    statusCode: 200,
    data: [{ name: 'Sepatu Futsal', price: 250000 }],
  });
});
