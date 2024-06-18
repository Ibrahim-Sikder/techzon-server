
export type TProduct = {
  name: string;
  price: number;
  discountPrice: number;
  sku?: string; // Optional since you've defined it as required: false in schema
  slug: string;
  tag: string[];
  brand: string; // Array of ObjectId
  color: string[];
  size: string;
  categories: string; // Array of ObjectId
  stock: number;
  description: string; // Assuming description exists but is not defined in your schema
  rating: number;
  meta_title?: string; // Optional since you've defined it as required: false in schema
  meta_description?: string; // Optional since you've defined it as required: false in schema
  meta_keywords?: string[]; // Optional since you've defined it as required: false in schema
  createdAt?: Date; // Assuming these fields are managed by Mongoose timestamps
  updatedAt?: Date; // Assuming these fields are managed by Mongoose timestamps
  deletedAt?: Date; // Optional since you've defined it as required: false in schema
  isDeleted: boolean;
  active: boolean;
};
