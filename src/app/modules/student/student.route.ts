import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { StudentControllers } from './student.controller';
import { StudentValidations } from './student.validation';

const router = express.Router();

router.route('/').get(StudentControllers.getStudents).post(
    // auth(USER_ROLE.ADMIN, USER_ROLE.USER),
    // upload.single('avatar'),
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

export const StudentRoutes = router;
