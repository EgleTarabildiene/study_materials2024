"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudensController = void 0;
const connect_1 = require("../db/connect");
class StudensController {
    static getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            if (req.user.type > 2) {
                return res.status(400).json({
                    text: "Neturite teisiu"
                });
            }
            const sql = "SELECT * FROM students";
            const [result] = yield connect_1.pool.query(sql);
            res.json(result);
        });
    }
    static getStudent(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "SELECT * FROM students WHERE id=?";
            const [result] = yield connect_1.pool.query(sql, [req.params.id]);
            if (result.length == 0) {
                return res.status(404).json({
                    'text': 'Pateiktas įrašas nerastas'
                });
            }
            else {
                res.json(result[0]);
            }
        });
    }
    static insert(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "INSERT INTO students (name, surname, ) VALUES ( ?, ?)";
            yield connect_1.pool.query(sql, [req.body.name, req.body.surname]);
            res.status(201).json({
                "success": true
            });
        });
    }
    static update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "UPDATE students SET name=?, surname=? WHERE id=?";
            try {
                yield connect_1.pool.query(sql, [req.body.name, req.body.surname, req.body.id]);
                res.json({
                    "success": true
                });
            }
            catch (error) {
                res.status(500).json({
                    'text': 'Įvyko atnaujinimo klaida'
                });
            }
        });
    }
    static delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "DELETE FROM students WHERE id=?";
            yield connect_1.pool.query(sql, [req.params.id]);
            res.json({
                "success": true
            });
        });
    }
}
exports.StudensController = StudensController;
