import express from 'express';
import { GroupsController } from '../controllers/groups.controller';



const groupsRouter=express.Router();

groupsRouter.get("/", GroupsController.getAll);
groupsRouter.get("/:id", GroupsController.getGroup);

groupsRouter.post("/", GroupsController.insert);
groupsRouter.put("/", GroupsController.update);
groupsRouter.delete("/:id", GroupsController.delete);



export {groupsRouter};