"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentControllers = void 0;
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const student_service_1 = require("./student.service");
// Route: /api/v1/students/ (POST)
const createStudent = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield student_service_1.StudentServices.createStudent(req.body);
    (0, sendResponse_1.default)(res, result);
}));
// Route: /api/v1/students/ (GET)
const getStudents = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield student_service_1.StudentServices.getStudents(req.query);
    (0, sendResponse_1.default)(res, result);
}));
// Route: /api/v1/students/:id (GET)
const getSingleStudent = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield student_service_1.StudentServices.getSingleStudent(req.params.certificateId);
    (0, sendResponse_1.default)(res, result);
}));
// Route: /api/v1/students/:id (PUT)
// const updateStudent = catchAsync(async (req, res) => {
//     const result = await StudentServices.updatePostIntoDB(
//         req.params.id,
//         req.user._id,
//         req.body,
//         req.file as Express.Multer.File,
//     );
//     sendResponse(res, result);
// });
// Route: /api/v1/students/:id (DELETE)
// const deleteStudent = catchAsync(async (req, res) => {
//     const result = await StudentServices.deletePostFromDB(
//         req.params.id,
//         req.user._id,
//     );
//     sendResponse(res, result);
// });
exports.StudentControllers = {
    createStudent,
    getStudents,
    getSingleStudent,
    // updateStudent,
    // deleteStudent,
};
