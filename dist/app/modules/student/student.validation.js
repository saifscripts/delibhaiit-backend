"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentValidations = void 0;
const zod_1 = require("zod");
const createStudentValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().min(3, 'Name must be at least 3 characters long'),
        startDate: zod_1.z.coerce.date(),
        completionDate: zod_1.z.coerce.date(),
    }),
});
const updateStudentValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z
            .string()
            .min(3, 'Name must be at least 3 characters long')
            .optional(),
        startDate: zod_1.z.coerce.date().optional(),
        completionDate: zod_1.z.coerce.date().optional(),
        photo: zod_1.z.string().optional(),
    }),
});
exports.StudentValidations = {
    createStudentValidationSchema,
    updateStudentValidationSchema,
};
