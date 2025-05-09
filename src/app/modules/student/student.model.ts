import { Schema, model } from 'mongoose';
import { IStudent } from './student.interface';

const StudentSchema = new Schema<IStudent>(
    {
        certificateId: { type: String, required: true, unique: true },
        name: { type: String, required: true },
        startDate: { type: Date, required: true },
        completionDate: { type: Date, required: true },
        photo: { type: String, required: true },
        isDeleted: { type: Boolean, default: false },
    },
    {
        timestamps: true,
    },
);

// Query Middlewares
StudentSchema.pre('find', function (next) {
    this.find({ isDeleted: { $ne: true } });
    next();
});

StudentSchema.pre('findOne', function (next) {
    if (this.getOptions().getDeletedDocs) {
        return next();
    }

    this.find({ isDeleted: { $ne: true } });
    next();
});

StudentSchema.pre('aggregate', function (next) {
    this.pipeline().unshift({ $match: { isDeleted: { $ne: true } } });
    next();
});

export const Student = model<IStudent>('Student', StudentSchema);
