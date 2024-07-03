"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentsRouter = void 0;
const express_1 = __importDefault(require("express"));
const auth_middleware_1 = require("../middlewares/auth.middleware");
const students_controller_1 = require("../controllers/students.controller");
const studentsRouter = express_1.default.Router();
exports.studentsRouter = studentsRouter;
studentsRouter.get("/", auth_middleware_1.authMiddleware, students_controller_1.StudentsController.getAll);
studentsRouter.get("/:id", auth_middleware_1.authMiddleware, students_controller_1.StudentsController.getStudent);
studentsRouter.post("/", auth_middleware_1.authMiddleware, students_controller_1.StudentsController.insert);
studentsRouter.put("/", auth_middleware_1.authMiddleware, students_controller_1.StudentsController.update);
studentsRouter.delete("/:id", auth_middleware_1.authMiddleware, students_controller_1.StudentsController.delete);
