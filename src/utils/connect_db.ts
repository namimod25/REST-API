import mongoose from 'mongoose';
import config from '../config/enviroment';
import { logger } from './logger';

mongoose
  .connect(`${config.db}`)
  .then(() => {
    logger.info('connected to mongodb');
  })
  .catch((error) => {
    logger.info('could not connect to db');
    logger.error(error);
    process.exit(1);
  });
