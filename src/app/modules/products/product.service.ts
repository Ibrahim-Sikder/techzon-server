import { sendImageToCloudinary } from '../../utils/sendImageToCloudinary';
import { TProduct } from './product.interface';
import { Product } from './product.model';

const createProduct = async (payload: TProduct) => {
  sendImageToCloudinary()
  const result = await Product.create(payload);
  return result;
};
const getAllProduct = async () => {
  const result = await Product.find();
  return result;
};
const getSingleProduct = async (id: string) => {
  const result = await Product.findOne({ id });
  return result;
};
const deleteProduct = async () => {
  const result = await Product.find();
  return result;
};
const updateProduct = async () => {
  const result = await Product.find();
  return result;
};

export const ProductServices = {
  createProduct,
  getAllProduct,
  getSingleProduct,
  deleteProduct,
  updateProduct,
};
