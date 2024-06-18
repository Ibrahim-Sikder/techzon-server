import express from 'express' 
import { ProductControllers } from './product.controller';
import { validateRequest } from '../../middlewares/validateReuest';
import { ProductValidationSchema } from './product.validation';


const router = express.Router()

router.post('/create-product',validateRequest(ProductValidationSchema.createProductValidationSchema),ProductControllers.createProduct )
router.get('/',ProductControllers.getAllProduct )
router.get('/:productId',ProductControllers.getSingleProduct )




export const ProductRoutes = router;