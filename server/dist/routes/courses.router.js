"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.coursesRouter = void 0;
const express_1 = __importDefault(require("express"));
const courses_controller_1 = require("../controllers/courses.controller");
const coursesRouter = express_1.default.Router();
exports.coursesRouter = coursesRouter;
coursesRouter.get("/", courses_controller_1.CoursesController.getAll);
coursesRouter.get("/:id", courses_controller_1.CoursesController.getCourse);
coursesRouter.post("/", courses_controller_1.CoursesController.insert);
coursesRouter.put("/", courses_controller_1.CoursesController.update);
coursesRouter.delete("/", courses_controller_1.CoursesController.delete);
