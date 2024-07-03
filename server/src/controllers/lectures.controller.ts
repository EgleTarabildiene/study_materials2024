import { pool } from "../db/connect";
import { Lecture } from "../models/lecture"; 


export class LecturesController{
    static async getAll( req:any, res:any){
              if (req.user.type>2){
            return res.status(400).json({
                text:"Neturite teisiu"
            })
        }
   
        const sql="SELECT * FROM lectures";
        const [result]=await pool.query<Lecture[]>(sql);
        res.json(result);
    }


   static async getLecture( req:any, res:any){
   const sql="SELECT * FROM lectures WHERE id=?";
        const [result]=await pool.query<Lecture[]>(sql, [req.params.id]);
        if (result.length==0){
           return res.status(404).json({
                'text':'Pateiktas įrašas nerastas'
            });
        }else{
            res.json(result[0]);
        }
       
    }


     static async insert(req:any, res:any){
        const sql="INSERT INTO lectures (name, description, group_id, lecture_date) VALUES ( ?, ?, ?, ? )";
        await pool.query(sql, [req.body.name, req.body.description, req.body.group_id, req.body.lecture_date]);
       res.status(201).json({
            "success":true
        })
    }


     static async update(req:any, res:any){
const sql="UPDATE lectures SET name=?, description=?, group_id=?, lecture_date=? WHERE id=?";
     try{   
await pool.query(sql, [req.body.name, req.body.description, req.body.group_id, req.body.lecture_date, req.body.id]);
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
const sql="DELETE FROM lectures WHERE id=?";
        await pool.query(sql, [req.params.id]);
        res.json({
            "success":true
        })
    }
}