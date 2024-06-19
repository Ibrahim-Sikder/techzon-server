import { z } from 'zod';

const createUserValidationSchema = z.object({
  body: z.object({
    firstName: z.string({ required_error: 'First name is required' }),
    lastName: z.string({ required_error: 'Last name is required' }),
    password: z.string({ required_error: 'Password is required' }),
    email: z.string().email(),
  }),
});
const userLoginValidationSchema = z.object({
  body: z.object({
    email: z.string().email(),
  }),
});
const changePasswordValidationSchema = z.object({
  body: z.object({
    oldPassword: z.string({ required_error: 'Old password is required' }),
    newPassword: z.string({ required_error: 'Password is required' }),
  }),
});
const refreshTokenValidationSchema = z.object({
  cookies: z.object({
    refreshToken: z.string({ required_error: 'Refresh token is required!' }),
  }),
});

export const UserValidations = {
  createUserValidationSchema,
  userLoginValidationSchema,
  changePasswordValidationSchema,
  refreshTokenValidationSchema,
};
