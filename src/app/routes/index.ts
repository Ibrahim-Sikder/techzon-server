import express from 'express';
import { UserRoutes } from '../modules/user/user.route';
import { StudentRoutes } from '../modules/student/student.route';
import { AcademicSemesterRoutes } from '../modules/academicSemester/academicSemester.route';
import { AcademicFacultyRoutes } from '../modules/academicFaculty/academicFaculty.route';
import { AcademicDepartmentRoutes } from '../modules/academicDepartment/academicDepartment.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/students',
    route: StudentRoutes,
  },
  {
    path: '/academic-semester',
    route: AcademicSemesterRoutes,
  },
  {
    path: '/academic-faculties',
    route: AcademicFacultyRoutes,
  },
  {
    path: '/academic-department',
    route: AcademicDepartmentRoutes,
  },

  // {
  //   path: '/admins',
  //   route: AdminRoutes,
  // },
  // {
  //   path: '/faculties',
  //   route: FacultyRoutes,
  // },
  // {
  //   path: '/courses',
  //   route: CourseRoutes,
  // },
  // {
  //   path: '/semester-registrations',
  //   route: semesterRegistrationRoutes,
  // },
  // {
  //   path: '/offered-courses',
  //   route: offeredCourseRoutes,
  // },
  // {
  //   path: '/auth',
  //   route: AuthRoutes,
  // },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
