import { pool } from "../db/connect";
import { Student } from "../models/student";



export class StudentsController{
    static async getAll( req:any, res:any){
       if (req.user.type>2){
            return res.status(400).json({
                text:"Neturite teisiu"
            })
        }
        const sql="SELECT * FROM students";
        const [result]=await pool.query<Student[]>(sql);
        res.json(result);
    }


   static async getStudent( req:any, res:any){
   const sql="SELECT * FROM students WHERE id=?";
        const [result]=await pool.query<Student[]>(sql, [req.params.id]);
        if (result.length==0){
           return res.status(404).json({
                'text':'Pateiktas įrašas nerastas'
            });
        }else{
            res.json(result[0]);
        }
       
    }


     static async insert(req:any, res:any){
        const sql="INSERT INTO students (name, surname ) VALUES ( ?, ?)";
        await pool.query(sql, [req.body.name, req.body.surname]);
       res.status(201).json({
            "success":true
        })
    }


     static async update(req:any, res:any){
const sql="UPDATE students SET name=?, surname=? WHERE id=?";
     try{   
await pool.query(sql, [req.body.name, req.body.surname, req.body.id]);
        res.json({
            "success":true
        });
      }catch(error){
            res.status(500).json({
                'text':'Įvyko atnaujinimo klaida'
            });
        }
        
    }


static async delete(req:any, res:any){
const sql="DELETE FROM students WHERE id=?";
        await pool.query(sql, [req.params.id]);
        res.json({
            "success":true
        })
    }
}