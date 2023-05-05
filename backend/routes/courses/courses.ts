import express from 'express';

import { coursesSchema } from './schema';
import { Courses } from '../../db';

export const CoursesRouter = express.Router();

CoursesRouter.get('/', async(req, res) => {
    const courseInstances = await Courses.findAll();

    res.send(courseInstances);;
});

CoursesRouter.post('/', async(req, res) => {
    try {
        const course = coursesSchema.parse(req.body)

        await Courses.create(course);

        res.status(200);
        res.send();
    } catch (e) {
        if (e instanceof Error) {
            res.status(400);
            res.send(e.message);
        }
    }
})