import express, { NextFunction, Request, Response } from 'express';
import { ProductControllers } from './product.controller';
import { validateRequest } from '../../middlewares/validateReuest';
import { ProductValidationSchema } from './product.validation';
import { upload } from '../../utils/sendImageToCloudinary';

const router = express.Router();

router.post(
  '/create-product',
  upload.single('file'),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = JSON.parse(req.body.data);
    next();
  },
  validateRequest(ProductValidationSchema.createProductValidationSchema),
  ProductControllers.createProduct,
);
router.get('/', ProductControllers.getAllProduct);
router.get('/:productId', ProductControllers.getSingleProduct);

export const ProductRoutes = router;
