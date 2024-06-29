import { pool } from "../db/connect";
import { Course } from "../models/course";



export class CoursesController{
    static async getAll( req:any, res:any){
   const sql="SELECT * FROM courses";
        const [result]=await pool.query<Course[]>(sql);
        res.json(result);
    }

    static async getCourse( req:any, res:any){
   const sql="SELECT * FROM courses WHERE id=?";
        const [result]=await pool.query<Course[]>(sql, [req.params.id]);
        res.json(result[0]);
    }



     static async insert(req:any, res:any){
        const sql="INSERT INTO courses (name) VALUES ( ? )";
        await pool.query(sql, [req.body.name]);
        res.json({
            "success":true
        })
    }

     static async update(req:any, res:any){
const sql="UPDATE courses SET name=? WHERE id=?";
        await pool.query(sql, [req.body.name, req.body.id]);
        res.json({
            "success":true
        })
    }

static async delete(req:any, res:any){
const sql="DELETE FROM courses WHERE id=?";
        await pool.query(sql, [req.params.id]);
        res.json({
            "success":true
        })
    }
}

