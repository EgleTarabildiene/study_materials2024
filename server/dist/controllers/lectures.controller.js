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
exports.LecturesController = void 0;
const connect_1 = require("../db/connect");
class LecturesController {
    static getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "SELECT * FROM lectures";
            const [result] = yield connect_1.pool.query(sql);
            res.json(result);
        });
    }
    static getLecture(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "SELECT * FROM lectures WHERE id=?";
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
            const sql = "INSERT INTO lectures (name, description, group_id) VALUES ( ?, ?, ? )";
            yield connect_1.pool.query(sql, [req.body.name, req.body.description, req.body.group_id]);
            res.status(201).json({
                "success": true
            });
        });
    }
    static update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "UPDATE lectures SET name=?, description=?, group_id=? WHERE id=?";
            try {
                yield connect_1.pool.query(sql, [req.body.name, req.body.description, req.body.group_id, req.body.id]);
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
            const sql = "DELETE FROM lectures WHERE id=?";
            yield connect_1.pool.query(sql, [req.params.id]);
            res.json({
                "success": true
            });
        });
    }
}
exports.LecturesController = LecturesController;
