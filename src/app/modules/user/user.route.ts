import express from 'express';

const router = express.Router();

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

export const UserRoutes = router;
