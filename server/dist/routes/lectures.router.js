"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.lecturesRouter = void 0;
const express_1 = __importDefault(require("express"));
const lectures_controller_1 = require("../controllers/lectures.controller");
const lecturesRouter = express_1.default.Router();
exports.lecturesRouter = lecturesRouter;
lecturesRouter.get("/", lectures_controller_1.LecturesController.getAll);
lecturesRouter.get("/:id", lectures_controller_1.LecturesController.getLecture);
lecturesRouter.post("/", lectures_controller_1.LecturesController.insert);
lecturesRouter.put("/", lectures_controller_1.LecturesController.update);
lecturesRouter.delete("/:id", lectures_controller_1.LecturesController.delete);
