import express from 'express';
import { AuthRoutes } from '../modules/auth/auth.route';
import { StudentRoutes } from '../modules/student/student.route';

const router = express.Router();

const routes = [
    { path: '/auth', route: AuthRoutes },
    // { path: '/users', route: UserRoutes },
    { path: '/students', route: StudentRoutes },
    // { path: '/admin', route: AdminRoutes },
    // { path: '/payments', route: PaymentRoutes },
    // { path: '/comments', route: CommentRoutes },
];

routes.forEach((route) => router.use(route.path, route.route));

export default router;
