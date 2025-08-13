import { Request, Response } from 'express';
import { createProductValidation } from '../validation/product.validation';
import { logger } from '../utils/logger';
import { getProductFromDB } from '../services/product.service';

export const createProduct = (req: Request, res: Response) => {
  const { error, value } = createProductValidation(req.body);
  if (error) {
    logger.error('ERR: product - create = ', error.details[0].message);
    return res.status(422).send({
      status: false,
      statusCode: 422,
      message: error.details[0].message,
      data: value,
    });
  }
  logger.info('success Add new product');
  return res.status(200).send({
    status: true,
    statusCode: 200,
    message: 'Add Product success',
    data: value,
  });
};

export const getProduct = async (req: Request, res: Response) => {
  const products = await getProductFromDB();

  logger.info('success get data');
  return res
    .status(200)
    .send({ status: true, statusCode: 200, data: products });

  //   const {
  //     params: { name },
  //   } = req;

  //   if (name) {
  //     const filterProducts = products.filter((product) => {
  //       if (product.name === name) {
  //         return product;
  //       }
  //     });
  //     if (filterProducts.length === 1) {
  //       logger.info('Data Not Found');
  //       return res
  //         .status(404)
  //         .send({ status: false, statusCode: 404, data: filterProducts[0] });
  //     }
  //   }
  //
};
