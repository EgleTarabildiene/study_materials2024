import express from 'express';

import { LecturesController } from '../controllers/lectures.controller';
import { authMiddleware } from '../middlewares/auth.middleware';
import { editGroupsMiddleware } from '../middlewares/edit.group.middleware';



const lecturesRouter=express.Router();

lecturesRouter.get("/", authMiddleware, LecturesController.getAll);
lecturesRouter.get("/:id", authMiddleware, editGroupsMiddleware, LecturesController.getLecture);

lecturesRouter.post("/", authMiddleware, editGroupsMiddleware, LecturesController.insert);
lecturesRouter.put("/", authMiddleware, editGroupsMiddleware, LecturesController.update);
lecturesRouter.delete("/:id", authMiddleware, editGroupsMiddleware, LecturesController.delete);



export {lecturesRouter};