import productModel from '../models/product.models';

export const getProduct = async () => {
  productModel
    .find()
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
};
