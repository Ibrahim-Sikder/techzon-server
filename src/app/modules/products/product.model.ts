import { Schema, model } from 'mongoose';
import { TProduct } from './product.interface';

const productSchema = new Schema<TProduct>(
  {
    name: {
      type: String,
      required: [true, 'Product name is required'],
    },
    price: {
      type: Number,
      required: [true, 'Price is required'],
    },

    slug: {
      type: String,
      required: [true, 'Slug is required'],
    },
    discountPrice: {
      type: Number,
      required: [true, 'Price is required'],
    },
    sku: { type: String, required: false },
    tag: [
      {
        type: String,
        required: [true, 'Tag is required'],
      },
    ],
    rating: { type: Number, required: true, default: 0 },
    brand: [
      {
        type: String,
        required: [true, 'Brand is required'],
 
      },
    ],
    color: [
      {
        type: String,
        required: [true, 'Color  is required'],
      },
    ],
    size: {
      type: String,
      required: [true, 'Size is required'],
    },
    categories: [
      {
        type: String,
        required: [true, 'Categories is required'],
     
      },
    ],
    stock: {
      type: Number,
      required: [true, 'Stock is required'],
    },
    meta_title: { type: String, required: false },
    meta_description: { type: String, required: false },
    meta_keywords: [{ type: String, required: false }],
    deletedAt: { type: Date, required: false },
    isDeleted: { type: Boolean, default: false },
    active: {
      type: Boolean,
    },
  },
  {
    timestamps: true,
  },
);

export const Product = model<TProduct>('Product', productSchema);
