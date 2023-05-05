import bodyParser from 'body-parser';
import express from 'express';
import cors from 'cors';
import { sequelize } from './db/sequelize';
import { CoursesRouter, ResultsRouter, StudentsRouter } from './routes';

const app = express();
sequelize.sync().then(() => console.log('db is ready'));

app.use(express.json());
// Allowing all requests from every source, but seeing as this is a demo app that only runs on localhost it doesn't matter too much
// To restrict it further would just require specifying the domain the frontend ends up running on once deployed
app.use(cors());

const port = 8000;

app.listen(port, async () => {
    console.log(`Shyftlabs server started on port ${port}`);
})

app.use('/student', StudentsRouter);
app.use('/course', CoursesRouter);
app.use('/result', ResultsRouter);

