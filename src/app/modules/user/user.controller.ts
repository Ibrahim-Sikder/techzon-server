import httpStatus from 'http-status';

import { UserServices } from './user.service';
import { catchAsync } from '../../utils/catchAsync';
import { sendResponse } from '../../utils/sendResponse';

const createStudent = catchAsync(async (req, res) => {
  const { password, student } = req.body;

  const result = await UserServices.createStudentIntoDB(password, student);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student is created successfully',
    data: result,
  });
});
export const UserControllers = {
  createStudent,
};
