import productModel from '../models/product.models';
import { logger } from '../utils/logger';

export const getProductFromDB = async () => {
  return await productModel
    .find()
    .then((data) => {
      return data;
    })
    .catch((error) => {
      logger.info('cannot get data db');
      logger.error(error);
    });
};
