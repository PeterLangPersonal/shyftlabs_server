import { z } from 'zod';

export const coursesSchema = z.object({
    courseName: z.string(),
})