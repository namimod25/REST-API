import { number, string } from 'joi';
import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    product_id: {
      type: string,
      unique: true,
    },
    name: {
      type: string,
    },
    price: {
      type: number,
    },
    size: {
      type: string,
    },
  },
  { timestamps: true },
);

const productModel = mongoose.model('product', productSchema);

export default productModel;
