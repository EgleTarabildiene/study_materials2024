import express from 'express';
import { CoursesController } from '../controllers/courses.controller';
import { authMiddleware } from '../middlewares/auth.middleware';
import { editGroupsMiddleware } from '../middlewares/edit.group.middleware';


const coursesRouter=express.Router();

coursesRouter.get("/", authMiddleware, CoursesController.getAll);
coursesRouter.get("/:id", authMiddleware, editGroupsMiddleware, CoursesController.getCourse);

coursesRouter.post("/", authMiddleware, editGroupsMiddleware, CoursesController.insert);
coursesRouter.put("/", authMiddleware, editGroupsMiddleware, CoursesController.update);
coursesRouter.delete("/:id", authMiddleware, editGroupsMiddleware, CoursesController.delete);



export {coursesRouter};