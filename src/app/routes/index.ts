import express from 'express';
import { ProductRoutes } from '../modules/products/product.route';
import { UserRoutes } from '../modules/user/user.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/products',
    route: ProductRoutes,
  },
  {
    path: '/auth',
    route: UserRoutes,
  },
  

];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
