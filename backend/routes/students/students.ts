import express from 'express';

import { Students } from '../../db';
import { studentsSchema } from './schema';
import dayjs from 'dayjs';

export const StudentsRouter = express.Router();

StudentsRouter.get('/', async(req, res) => {
    const studentInstances = await Students.findAll();

    res.send(studentInstances);;
});

StudentsRouter.post('/', async(req, res) => {
    try {
        const student = studentsSchema.parse(req.body);

        const dateOfBirth = dayjs(student.dateOfBirth);

        if(!dateOfBirth.isValid()) {
            throw new Error('Date of birth is invalid');
        } else if (dayjs().diff(dateOfBirth, 'years') < 10) {
            throw new Error('Student is too young')
        }

        await Students.create({...student, dateOfBirth: dateOfBirth.toDate()});

        res.status(200);
        res.send();
    } catch (e) {
        if (e instanceof Error) {
            res.status(400);
            res.send(e.message);
        }
    }
});
