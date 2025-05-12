"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentRoutes = void 0;
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("../../middlewares/auth"));
const upload_1 = require("../../middlewares/upload");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const user_constant_1 = require("../user/user.constant");
const student_controller_1 = require("./student.controller");
const student_validation_1 = require("./student.validation");
const router = express_1.default.Router();
router
    .route('/')
    .get(student_controller_1.StudentControllers.getStudents)
    .post((0, auth_1.default)(user_constant_1.USER_ROLE.ADMIN), upload_1.upload.single('photo'), (0, validateRequest_1.default)(student_validation_1.StudentValidations.createStudentValidationSchema), student_controller_1.StudentControllers.createStudent);
router.route('/:certificateId').get(student_controller_1.StudentControllers.getSingleStudent);
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
    .delete((0, auth_1.default)(user_constant_1.USER_ROLE.ADMIN), student_controller_1.StudentControllers.deleteStudent)
    .put((0, auth_1.default)(user_constant_1.USER_ROLE.ADMIN), upload_1.upload.single('photo'), (0, validateRequest_1.default)(student_validation_1.StudentValidations.updateStudentValidationSchema), student_controller_1.StudentControllers.updateStudent);
exports.StudentRoutes = router;
