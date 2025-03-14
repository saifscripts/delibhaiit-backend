"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
// router
//     .route('/me')
//     .get(auth(USER_ROLE.ADMIN, USER_ROLE.USER), UserControllers.getMe)
//     .put(
//         auth(USER_ROLE.ADMIN, USER_ROLE.USER),
//         validateRequest(UserValidations.updateProfileValidationSchema),
//         UserControllers.updateProfile,
//     );
// router
//     .route('/avatar')
//     .post(
//         auth(USER_ROLE.ADMIN, USER_ROLE.USER),
//         upload.single('avatar'),
//         UserControllers.updateAvatar,
//     );
// router.route('/:id').get(UserControllers.getUser);
exports.UserRoutes = router;
