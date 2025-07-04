import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { StudentServices } from './student.service';

// Route: /api/v1/students/ (POST)
const createStudent = catchAsync(async (req, res) => {
    const result = await StudentServices.createStudent(
        req.body,
        req.file?.path ? req.file?.path : '',
    );
    sendResponse(res, result);
});

// Route: /api/v1/students/ (GET)
const getStudents = catchAsync(async (req, res) => {
    const result = await StudentServices.getStudents(req.query);
    sendResponse(res, result);
});

// Route: /api/v1/students/:id (GET)
const getSingleStudent = catchAsync(async (req, res) => {
    const result = await StudentServices.getSingleStudent(
        req.params.certificateId,
    );
    sendResponse(res, result);
});

// Route: /api/v1/students/:id (PUT)
const updateStudent = catchAsync(async (req, res) => {
    const result = await StudentServices.updateStudent(
        req.params.id,
        req.body,
        req.file?.path ? req.file?.path : undefined,
    );
    sendResponse(res, result);
});

// Route: /api/v1/students/:id (DELETE)
const deleteStudent = catchAsync(async (req, res) => {
    const result = await StudentServices.deleteStudent(req.params.id);
    sendResponse(res, result);
});

export const StudentControllers = {
    createStudent,
    getStudents,
    getSingleStudent,
    updateStudent,
    deleteStudent,
};
