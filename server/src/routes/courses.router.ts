import express from 'express';
import { CoursesController } from '../controllers/courses.controller';


const coursesRouter=express.Router();

coursesRouter.get("/", CoursesController.getAll);
coursesRouter.get("/:id", CoursesController.getCourse);

coursesRouter.post("/", CoursesController.insert);
coursesRouter.put("/", CoursesController.update);
coursesRouter.delete("/:id", CoursesController.delete);



export {coursesRouter};