import { z } from 'zod';

export const studentsSchema = z.object({
    firstName: z.string(),
    familyName: z.string(),
    dateOfBirth: z.string(),
})