import express, {Application, Request, Response} from 'express';

import { corsHeaders } from './middlewares/cors.middleware';
import { groupsRouter } from './routes/groups.router';
import { coursesRouter } from './routes/courses.router';
import { lecturesRouter } from './routes/lectures.router';
import { authRouter } from './routes/auth.router';
import { userRouter } from './routes/user.router';
import path from 'path';
import { studentsRouter } from './routes/students.router';



const app:Application=express();


app.use(express.urlencoded({ extended: false }));


app.use(express.json());


app.use(corsHeaders);



app.use("/img", express.static( path.join("./img") ));

app.use('/courses', coursesRouter);
app.use('/groups', groupsRouter);
app.use('/lectures', lecturesRouter);
app.use('/auth', authRouter);
app.use("/users", userRouter);
app.use("/students", studentsRouter);


export {app};