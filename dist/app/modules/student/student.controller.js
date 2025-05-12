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
    var _a, _b;
    const result = yield student_service_1.StudentServices.createStudent(req.body, ((_a = req.file) === null || _a === void 0 ? void 0 : _a.path) ? (_b = req.file) === null || _b === void 0 ? void 0 : _b.path : '');
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
const updateStudent = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _c, _d;
    const result = yield student_service_1.StudentServices.updateStudent(req.params.id, req.body, ((_c = req.file) === null || _c === void 0 ? void 0 : _c.path) ? (_d = req.file) === null || _d === void 0 ? void 0 : _d.path : undefined);
    (0, sendResponse_1.default)(res, result);
}));
// Route: /api/v1/students/:id (DELETE)
const deleteStudent = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield student_service_1.StudentServices.deleteStudent(req.params.id);
    (0, sendResponse_1.default)(res, result);
}));
exports.StudentControllers = {
    createStudent,
    getStudents,
    getSingleStudent,
    updateStudent,
    deleteStudent,
};
