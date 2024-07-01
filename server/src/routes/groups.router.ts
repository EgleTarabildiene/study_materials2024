import express from 'express';
import { GroupsController } from '../controllers/groups.controller';
import { authMiddleware } from '../middlewares/auth.middleware';
import { editGroupsMiddleware } from '../middlewares/edit.group.middleware';



const groupsRouter=express.Router();

groupsRouter.get("/", authMiddleware, GroupsController.getAll);
groupsRouter.get("/:id", authMiddleware, editGroupsMiddleware, GroupsController.getGroup);

groupsRouter.post("/", authMiddleware, editGroupsMiddleware, GroupsController.insert);
groupsRouter.put("/", authMiddleware, editGroupsMiddleware, GroupsController.update);
groupsRouter.delete("/:id", authMiddleware, editGroupsMiddleware, GroupsController.delete);



export {groupsRouter};