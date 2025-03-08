"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const student_route_1 = require("../modules/student/student.route");
const router = express_1.default.Router();
const routes = [
    // { path: '/auth', route: AuthRoutes },
    // { path: '/users', route: UserRoutes },
    { path: '/students', route: student_route_1.StudentRoutes },
    // { path: '/admin', route: AdminRoutes },
    // { path: '/payments', route: PaymentRoutes },
    // { path: '/comments', route: CommentRoutes },
];
routes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
