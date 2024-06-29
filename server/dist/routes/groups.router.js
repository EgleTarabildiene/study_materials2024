"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.groupsRouter = void 0;
const express_1 = __importDefault(require("express"));
const groups_controller_1 = require("../controllers/groups.controller");
const groupsRouter = express_1.default.Router();
exports.groupsRouter = groupsRouter;
groupsRouter.get("/", groups_controller_1.GroupsController.getAll);
groupsRouter.get("/:id", groups_controller_1.GroupsController.getGroup);
groupsRouter.post("/", groups_controller_1.GroupsController.insert);
groupsRouter.put("/", groups_controller_1.GroupsController.update);
groupsRouter.delete("/:id", groups_controller_1.GroupsController.delete);
