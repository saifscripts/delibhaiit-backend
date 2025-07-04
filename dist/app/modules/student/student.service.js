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
exports.StudentServices = void 0;
const http_status_1 = __importDefault(require("http-status"));
const QueryBuilder_1 = __importDefault(require("../../builders/QueryBuilder"));
const AppError_1 = __importDefault(require("../../errors/AppError"));
const generateRandomNumber_1 = require("../../utils/generateRandomNumber");
const student_constant_1 = require("./student.constant");
const student_model_1 = require("./student.model");
const createStudent = (payload, photo) => __awaiter(void 0, void 0, void 0, function* () {
    const newStudent = yield student_model_1.Student.create(Object.assign(Object.assign({}, payload), { photo, certificateId: `DIT${(0, generateRandomNumber_1.generateRandomNumber)(6)}` }));
    if (!newStudent) {
        throw new AppError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, 'Failed to create student!');
    }
    return {
        statusCode: http_status_1.default.CREATED,
        message: 'Student created successfully',
        data: newStudent,
    };
});
const getStudents = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const studentQuery = new QueryBuilder_1.default(student_model_1.Student.find(), 
    // .populate('author')
    query)
        .search(student_constant_1.StudentSearchableFields)
        .filter()
        .sort()
        .paginate()
        .fields();
    const students = yield studentQuery.modelQuery;
    const meta = yield studentQuery.countTotal();
    return {
        statusCode: http_status_1.default.OK,
        message: 'Students retrieved successfully',
        data: students,
        meta,
    };
});
const getSingleStudent = (certificateId) => __awaiter(void 0, void 0, void 0, function* () {
    const student = yield student_model_1.Student.findOne({ certificateId });
    if (!student) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, 'Student not found!');
    }
    return {
        statusCode: http_status_1.default.OK,
        message: 'Student retrieved successfully',
        data: student,
    };
});
const updateStudent = (studentId, payload, photo) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedStudent = yield student_model_1.Student.findByIdAndUpdate(studentId, Object.assign({ photo }, payload), {
        new: true,
    });
    if (!updatedStudent) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, 'Student not found!');
    }
    return {
        statusCode: http_status_1.default.OK,
        message: 'Student updated successfully!',
        data: updatedStudent,
    };
});
const deleteStudent = (studentId) => __awaiter(void 0, void 0, void 0, function* () {
    const deletedStudent = yield student_model_1.Student.findByIdAndDelete(studentId, {
        new: true,
    });
    if (!deletedStudent) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, 'Student not found!');
    }
    return {
        statusCode: http_status_1.default.OK,
        message: 'Student deleted successfully!',
        data: deletedStudent,
    };
});
exports.StudentServices = {
    createStudent,
    getStudents,
    getSingleStudent,
    updateStudent,
    deleteStudent,
};
