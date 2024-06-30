import express from 'express';

import { LecturesController } from '../controllers/lectures.controller';



const lecturesRouter=express.Router();

lecturesRouter.get("/", LecturesController.getAll);
lecturesRouter.get("/:id", LecturesController.getLecture);

lecturesRouter.post("/", LecturesController.insert);
lecturesRouter.put("/", LecturesController.update);
lecturesRouter.delete("/:id", LecturesController.delete);



export {lecturesRouter};