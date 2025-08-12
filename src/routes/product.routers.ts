import { Router, Request, Response, NextFunction } from 'express';
import { createProduct, getProduct } from '../controllers/product.controller';

export const ProductRouter: Router = Router();

ProductRouter.get('/', getProduct);
ProductRouter.get('/:name', getProduct);
ProductRouter.post('/', createProduct);

export default ProductRouter;
