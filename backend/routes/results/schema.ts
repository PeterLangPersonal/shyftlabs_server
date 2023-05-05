import { z } from 'zod';

export const resultsSchema = z.object({
    studentId: z.number(),
    courseId: z.number(),
    score: z.string().length(1),
});
