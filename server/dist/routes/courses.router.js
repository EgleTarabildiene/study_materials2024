"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.coursesRouter = void 0;
const express_1 = __importDefault(require("express"));
const courses_controller_1 = require("../controllers/courses.controller");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const edit_group_middleware_1 = require("../middlewares/edit.group.middleware");
const coursesRouter = express_1.default.Router();
exports.coursesRouter = coursesRouter;
coursesRouter.get("/", auth_middleware_1.authMiddleware, courses_controller_1.CoursesController.getAll);
coursesRouter.get("/:id", auth_middleware_1.authMiddleware, edit_group_middleware_1.editGroupsMiddleware, courses_controller_1.CoursesController.getCourse);
coursesRouter.post("/", auth_middleware_1.authMiddleware, edit_group_middleware_1.editGroupsMiddleware, courses_controller_1.CoursesController.insert);
coursesRouter.put("/", auth_middleware_1.authMiddleware, edit_group_middleware_1.editGroupsMiddleware, courses_controller_1.CoursesController.update);
coursesRouter.delete("/:id", auth_middleware_1.authMiddleware, edit_group_middleware_1.editGroupsMiddleware, courses_controller_1.CoursesController.delete);
