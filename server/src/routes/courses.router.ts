import express from 'express';
import { CoursesController } from '../controllers/courses.controller';
import { authMiddleware } from '../middlewares/auth.middleware';


const coursesRouter=express.Router();

coursesRouter.get("/", authMiddleware,CoursesController.getAll);
coursesRouter.get("/:id", authMiddleware, CoursesController.getCourse);

coursesRouter.post("/", authMiddleware, CoursesController.insert);
coursesRouter.put("/", authMiddleware, CoursesController.update);
coursesRouter.delete("/:id", authMiddleware, CoursesController.delete);



export {coursesRouter};