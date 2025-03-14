"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const auth_controller_1 = require("./auth.controller");
const auth_validation_1 = require("./auth.validation");
const router = express_1.default.Router();
// router.post(
//     '/register',
//     validateRequest(AuthValidations.signupValidationSchema),
//     AuthControllers.register,
// );
router.post('/login', (0, validateRequest_1.default)(auth_validation_1.AuthValidations.loginValidationSchema), auth_controller_1.AuthControllers.login);
router.post('/refresh-token', (0, validateRequest_1.default)(auth_validation_1.AuthValidations.refreshTokenValidationSchema), auth_controller_1.AuthControllers.refreshToken);
// router.put(
//     '/change-password',
//     auth(USER_ROLE.ADMIN, USER_ROLE.USER),
//     validateRequest(AuthValidations.changePasswordValidationSchema),
//     AuthControllers.changePassword,
// );
// router.post(
//     '/forget-password',
//     validateRequest(AuthValidations.forgetPasswordValidationSchema),
//     AuthControllers.forgetPassword,
// );
// router.put(
//     '/reset-password',
//     validateRequest(AuthValidations.resetPasswordValidationSchema),
//     AuthControllers.resetPassword,
// );
exports.AuthRoutes = router;
