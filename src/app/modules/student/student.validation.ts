import { z } from 'zod';

const createStudentValidationSchema = z.object({
    body: z.object({
        name: z.string().min(3, 'Name must be at least 3 characters long'),
        startDate: z.coerce.date(),
        completionDate: z.coerce.date(),
    }),
});

const updateStudentValidationSchema = z.object({
    body: z.object({
        name: z
            .string()
            .min(3, 'Name must be at least 3 characters long')
            .optional(),
        startDate: z.coerce.date().optional(),
        completionDate: z.coerce.date().optional(),
        photo: z.string().optional(),
    }),
});

export const StudentValidations = {
    createStudentValidationSchema,
    updateStudentValidationSchema,
};
