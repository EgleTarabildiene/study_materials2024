"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.groupsRouter = void 0;
const express_1 = __importDefault(require("express"));
const groups_controller_1 = require("../controllers/groups.controller");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const edit_group_middleware_1 = require("../middlewares/edit.group.middleware");
const groupsRouter = express_1.default.Router();
exports.groupsRouter = groupsRouter;
groupsRouter.get("/", auth_middleware_1.authMiddleware, groups_controller_1.GroupsController.getAll);
groupsRouter.get("/:id", auth_middleware_1.authMiddleware, edit_group_middleware_1.editGroupsMiddleware, groups_controller_1.GroupsController.getGroup);
groupsRouter.post("/", auth_middleware_1.authMiddleware, edit_group_middleware_1.editGroupsMiddleware, groups_controller_1.GroupsController.insert);
groupsRouter.put("/", auth_middleware_1.authMiddleware, edit_group_middleware_1.editGroupsMiddleware, groups_controller_1.GroupsController.update);
groupsRouter.delete("/:id", auth_middleware_1.authMiddleware, edit_group_middleware_1.editGroupsMiddleware, groups_controller_1.GroupsController.delete);
