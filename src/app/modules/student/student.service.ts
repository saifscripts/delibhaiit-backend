import httpStatus from 'http-status';
import QueryBuilder from '../../builders/QueryBuilder';
import AppError from '../../errors/AppError';
import { generateRandomNumber } from '../../utils/generateRandomNumber';
import { StudentSearchableFields } from './student.constant';
import { IStudent } from './student.interface';
import { Student } from './student.model';

const createStudent = async (payload: IStudent, photo: string) => {
    const newStudent = await Student.create({
        ...payload,
        photo,
        certificateId: `DIT${generateRandomNumber(6)}`,
    });

    if (!newStudent) {
        throw new AppError(
            httpStatus.INTERNAL_SERVER_ERROR,
            'Failed to create student!',
        );
    }

    return {
        statusCode: httpStatus.CREATED,
        message: 'Student created successfully',
        data: newStudent,
    };
};

const getStudents = async (query: Record<string, unknown>) => {
    const studentQuery = new QueryBuilder(
        Student.find(),
        // .populate('author')
        query,
    )
        .search(StudentSearchableFields)
        .filter()
        .sort()
        .paginate()
        .fields();

    const students = await studentQuery.modelQuery;
    const meta = await studentQuery.countTotal();

    return {
        statusCode: httpStatus.OK,
        message: 'Students retrieved successfully',
        data: students,
        meta,
    };
};

const getSingleStudent = async (certificateId: string) => {
    const student = await Student.findOne({ certificateId });

    if (!student) {
        throw new AppError(httpStatus.NOT_FOUND, 'Student not found!');
    }

    return {
        statusCode: httpStatus.OK,
        message: 'Student retrieved successfully',
        data: student,
    };
};

const updateStudent = async (studentId: string, payload: Partial<IStudent>) => {
    const updatedStudent = await Student.findByIdAndUpdate(studentId, payload, {
        new: true,
    });

    if (!updatedStudent) {
        throw new AppError(httpStatus.NOT_FOUND, 'Student not found!');
    }

    return {
        statusCode: httpStatus.OK,
        message: 'Student updated successfully!',
        data: updatedStudent,
    };
};

const deleteStudent = async (studentId: string) => {
    const deletedStudent = await Student.findByIdAndDelete(studentId, {
        new: true,
    });

    if (!deletedStudent) {
        throw new AppError(httpStatus.NOT_FOUND, 'Student not found!');
    }

    return {
        statusCode: httpStatus.OK,
        message: 'Student deleted successfully!',
        data: deletedStudent,
    };
};

export const StudentServices = {
    createStudent,
    getStudents,
    getSingleStudent,
    updateStudent,
    deleteStudent,
};
