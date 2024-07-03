"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.lecturesRouter = void 0;
const express_1 = __importDefault(require("express"));
const lectures_controller_1 = require("../controllers/lectures.controller");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const edit_group_middleware_1 = require("../middlewares/edit.group.middleware");
const lecturesRouter = express_1.default.Router();
exports.lecturesRouter = lecturesRouter;
lecturesRouter.get("/", auth_middleware_1.authMiddleware, lectures_controller_1.LecturesController.getAll);
lecturesRouter.get("/:id", auth_middleware_1.authMiddleware, edit_group_middleware_1.editGroupsMiddleware, lectures_controller_1.LecturesController.getLecture);
lecturesRouter.post("/", auth_middleware_1.authMiddleware, edit_group_middleware_1.editGroupsMiddleware, lectures_controller_1.LecturesController.insert);
lecturesRouter.put("/", auth_middleware_1.authMiddleware, edit_group_middleware_1.editGroupsMiddleware, lectures_controller_1.LecturesController.update);
lecturesRouter.delete("/:id", auth_middleware_1.authMiddleware, edit_group_middleware_1.editGroupsMiddleware, lectures_controller_1.LecturesController.delete);
