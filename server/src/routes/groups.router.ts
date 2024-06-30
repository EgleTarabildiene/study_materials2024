import express from 'express';
import { GroupsController } from '../controllers/groups.controller';
import { authMiddleware } from '../middlewares/auth.middleware';



const groupsRouter=express.Router();

groupsRouter.get("/", authMiddleware, GroupsController.getAll);
groupsRouter.get("/:id", authMiddleware, GroupsController.getGroup);

groupsRouter.post("/", authMiddleware, GroupsController.insert);
groupsRouter.put("/", authMiddleware, GroupsController.update);
groupsRouter.delete("/:id", authMiddleware, GroupsController.delete);



export {groupsRouter};