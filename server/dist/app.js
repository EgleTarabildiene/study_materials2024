"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const cors_middleware_1 = require("./middlewares/cors.middleware");
const groups_router_1 = require("./routes/groups.router");
const courses_router_1 = require("./routes/courses.router");
const lectures_router_1 = require("./routes/lectures.router");
const app = (0, express_1.default)();
exports.app = app;
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
app.use(cors_middleware_1.corsHeaders);
app.use('/courses', courses_router_1.coursesRouter);
app.use('/groups', groups_router_1.groupsRouter);
app.use('/lectures', lectures_router_1.lecturesRouter);
