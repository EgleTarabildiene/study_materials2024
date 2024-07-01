import express from 'express';

import { LecturesController } from '../controllers/lectures.controller';
import { authMiddleware } from '../middlewares/auth.middleware';



const lecturesRouter=express.Router();

lecturesRouter.get("/", authMiddleware, LecturesController.getAll);
lecturesRouter.get("/:id", authMiddleware, LecturesController.getLecture);

lecturesRouter.post("/", authMiddleware, LecturesController.insert);
lecturesRouter.put("/", authMiddleware, LecturesController.update);
lecturesRouter.delete("/:id", authMiddleware, LecturesController.delete);



export {lecturesRouter};