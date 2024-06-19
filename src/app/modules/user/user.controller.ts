import httpStatus from "http-status";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { UserService } from "./user.service";


const userRegister = catchAsync(async (req, res) => {
    const result = await UserService.userRegister(req.body);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'User register successfully!',
      data: result,
    });
  });
const userLogin = catchAsync(async (req, res) => {
    const result = await UserService.userLogin(req.body);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'User login successfully!',
      data: result,
    });
  });
  const changePassword = catchAsync(async (req, res) => {

    const result = await UserService.changePassword(req.body);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Password changed successfully!',
      data: result,
    });
  });
  


  export const UserController = {
    userRegister,
    userLogin,
    changePassword
  }