import express from 'express';
import auth from '../../middlewares/auth';
import { upload } from '../../middlewares/upload';
import validateRequest from '../../middlewares/validateRequest';
import { USER_ROLE } from '../user/user.constant';
import { StudentControllers } from './student.controller';
import { StudentValidations } from './student.validation';

const router = express.Router();

router.route('/').get(StudentControllers.getStudents).post(
    // auth(USER_ROLE.ADMIN, USER_ROLE.USER),
    upload.single('photo'),
    validateRequest(StudentValidations.createStudentValidationSchema),
    StudentControllers.createStudent,
);

router.route('/:certificateId').get(StudentControllers.getSingleStudent);
// .put(
//     auth(USER_ROLE.ADMIN, USER_ROLE.USER),
//     upload.single('featuredImage'),
//     validateRequest(StudentValidations.updatePostValidationSchema),
//     StudentControllers.updatePost,
// )
// .delete(
//     auth(USER_ROLE.ADMIN, USER_ROLE.USER),
//     StudentControllers.deletePost,
// );

router
    .route('/:id')
    .delete(auth(USER_ROLE.ADMIN), StudentControllers.deleteStudent)
    .put(
        // auth(USER_ROLE.ADMIN),
        upload.single('photo'),
        validateRequest(StudentValidations.updateStudentValidationSchema),
        StudentControllers.updateStudent,
    );

export const StudentRoutes = router;
