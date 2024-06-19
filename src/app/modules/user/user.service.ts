/* eslint-disable @typescript-eslint/no-explicit-any */
import httpStatus from 'http-status';
import { AppError } from '../../error/AppError';
import { TUser } from './user.interface';
import { User } from './user.model';
import jwt, { JwtPayload } from 'jsonwebtoken';
import config from '../../config';

const userRegister = async (payload: TUser) => {
  const result = User.create(payload);
  return result;
};
const userLogin = async (payload: any) => {
  const user = await User.findOne({
    email: payload?.email,
    password: payload?.password,
  });
  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'User not found');
  }

  const jwtPayload = {
    email: user?.email,
    password: user?.password,
  };

  const accessToken = jwt.sign(jwtPayload, config.jwt_access_secret as string, {
    expiresIn: config.jwt_access_expires_in,
  });
  const refreshToken = jwt.sign(
    jwtPayload,
    config.jwt_refresh_secret as string,
    {
      expiresIn: config.jwt_refresh_expires_in,
    },
  );

  return { accessToken, refreshToken };
};

const changePassword = async (payload: {
  oldPassword: string;
  newPassword: string;
}) => {
  const user = await User.findOne();
  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'User not found');
  }
  if (user.password !== payload.oldPassword) {
    throw new AppError(httpStatus.NOT_FOUND, 'Password do not matched!');
  }

  const result = User.findOneAndUpdate({
    password: payload?.newPassword,
  });
  return result;
};
const refreshToken = async (token: string) => {
  const decoded = jwt.verify(
    token,
    config.jwt_refresh_secret as string,
  ) as JwtPayload;
  console.log(decoded)

  const { userId, iat } = decoded;
  console.log(userId, iat);
};

export const UserService = {
  userRegister,
  userLogin,
  changePassword,
  refreshToken,
};
