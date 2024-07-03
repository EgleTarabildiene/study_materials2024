import express from 'express';

import { authMiddleware } from '../middlewares/auth.middleware';
import { StudentsController } from '../controllers/students.controller';



const studentsRouter=express.Router();

studentsRouter.get("/", authMiddleware, StudentsController.getAll);
studentsRouter.get("/:id", authMiddleware, StudentsController.getStudent);
studentsRouter.post("/", authMiddleware, StudentsController.insert);
studentsRouter.put("/", authMiddleware, StudentsController.update);
studentsRouter.delete("/:id", authMiddleware, StudentsController.delete);



export {studentsRouter};