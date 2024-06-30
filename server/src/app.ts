import express, {Application, Request, Response} from 'express';

import { corsHeaders } from './middlewares/cors.middleware';
import { groupsRouter } from './routes/groups.router';
import { coursesRouter } from './routes/courses.router';
import { lecturesRouter } from './routes/lectures.router';
import { authRouter } from './routes/auth.router';



const app:Application=express();


app.use(express.urlencoded({ extended: false }));


app.use(express.json());


app.use(corsHeaders);





app.use('/courses', coursesRouter);
app.use('/groups', groupsRouter);
app.use('/lectures', lecturesRouter);
app.use('/auth', authRouter);


export {app};