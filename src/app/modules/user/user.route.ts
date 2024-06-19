import express from 'express';
import { UserController } from './user.controller';
import { validateRequest } from '../../middlewares/validateReuest';
import { UserValidations } from './user.validation';

const router = express.Router();

router.post(
  '/register',
  validateRequest(UserValidations.createUserValidationSchema),
  UserController.userRegister,
);

router.post(
  '/login',
  validateRequest(UserValidations.userLoginValidationSchema),
  UserController.userLogin,
);
router.post(
  '/change-password',
  validateRequest(UserValidations.changePasswordValidationSchema),
  UserController.changePassword,
);

export const UserRoutes = router;
