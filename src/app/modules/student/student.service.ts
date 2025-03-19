import httpStatus from 'http-status';
import QueryBuilder from '../../builders/QueryBuilder';
import AppError from '../../errors/AppError';
import { generateRandomNumber } from '../../utils/generateRandomNumber';
import { StudentSearchableFields } from './student.constant';
import { IStudent } from './student.interface';
import { Student } from './student.model';

const createStudent = async (payload: IStudent) => {
    const newStudent = await Student.create({
        ...payload,
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

// const updateStudent = async (
//     postId: string,
//     authorId: mongoose.Types.ObjectId, // retrieved from token
//     payload: Partial<IPost>,
//     featuredImage: Express.Multer.File,
// ) => {
//     const post = await Post.findById(postId);

//     if (!post) {
//         throw new AppError(httpStatus.NOT_FOUND, 'Post not found!');
//     }

//     if (post.author.toString() !== authorId.toString()) {
//         throw new AppError(
//             httpStatus.UNAUTHORIZED,
//             'You are not authorized to update this post!',
//         );
//     }

//     if (!featuredImage?.path && payload?.featuredImage === undefined) {
//         // no image to update (this will preserve old image)
//         payload.featuredImage = undefined;
//     } else {
//         // received new image (this will replace old image)
//         payload.featuredImage = payload.featuredImage || featuredImage?.path;
//     }

//     const updatedPost = await Post.findOneAndUpdate(
//         { _id: postId, author: authorId },
//         payload,
//         { new: true },
//     );

//     if (!updatedPost) {
//         throw new AppError(httpStatus.NOT_FOUND, 'Post not found!');
//     }

//     return {
//         statusCode: httpStatus.OK,
//         message: 'Post updated successfully!',
//         data: updatedPost,
//     };
// };

const deleteStudent = async (studentId: string) => {
    const deletedStudent = await Student.findByIdAndDelete(studentId, {
        new: true,
    });

    if (!deletedStudent) {
        throw new AppError(httpStatus.NOT_FOUND, 'Student not found!');
    }

    return {
        statusCode: httpStatus.OK,
        message: 'Post deleted successfully!',
        data: null,
    };
};

export const StudentServices = {
    createStudent,
    getStudents,
    getSingleStudent,
    // updateStudent,
    deleteStudent,
};
