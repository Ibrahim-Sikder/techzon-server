export type TProduct = {
  name: string;
  price: number;
  discountPrice: number;
  sku: string,
  slug:string,
  total_sale:number,
  tag: string[];
  brand: string[];
  color: string[];
  size: string;
  categories: string[];
  stock: number;
  description: string;
  rating:number;
  meta_title: string;
  meta_description: string;
  meta_keywords: string[];
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  isDeleted: boolean;
  active:boolean
};
