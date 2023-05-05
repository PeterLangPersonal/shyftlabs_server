import express from 'express';

import { resultsSchema } from './schema';
import { Courses, Results, Students } from '../../db';

export const ResultsRouter = express.Router();

ResultsRouter.get('/', async(req, res) => {
    const resultsInstances = await Results.findAll({
        include: [
            { model: Students, attributes: ['firstName', 'familyName']},
            { model: Courses, attributes: ['courseName']},
        ]
    });

    res.send(resultsInstances);;
});

ResultsRouter.post('/', async(req, res) => {
    try {
        const result = resultsSchema.parse(req.body);

        const student = await Students.findByPk(result.studentId);
        if (!student) {
            throw new Error('Student not found');
        }
        const course = await Courses.findByPk(result.courseId);
        if (!course) {
            throw new Error('Course not found');
        }

        await Results.create({
            score: result.score,
            studentId: student.id,
            courseId: course.id,
        });

        res.status(200);
        res.send();
    } catch (e) {
        if (e instanceof Error) {
            res.status(400);
            res.send(e.message);
        }
    }
})