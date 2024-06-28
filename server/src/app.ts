import express, {Application, Request, Response} from 'express';

import { corsHeaders } from './middlewares/cors.middleware';
import { groupsRouter } from './routes/groups.router';
import { coursesRouter } from './routes/courses.router';



const app:Application=express();

//Sutvarkomi duomenys jei buvo siusta forma
app.use(express.urlencoded({ extended: false }));

//Sutvarkomi duomenys jei buvo atsiustas JSON failas
app.use(express.json());

//Į visus response header'ius įkeliame CORS nurodymus
app.use(corsHeaders);




app.use('/groups', groupsRouter);
app.use('/courses', coursesRouter);


export {app};