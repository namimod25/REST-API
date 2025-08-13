import { Router } from 'express';
import { createProduct } from '../controllers/product.controller';
import { getProduct } from '../services/product.service';

export const ProductRouter: Router = Router();

ProductRouter.get('/', getProduct);
ProductRouter.post('/', createProduct);
