import { pool } from "../db/connect";
import { Group } from "../models/group"; 
import { Student } from "../models/student";


export class GroupsController{
    static async getAll( req:any, res:any){
       if (req.user.type>2){
            return res.status(400).json({
                text:"Neturite teisiu"
            })
        }
        const sql="SELECT * FROM groupss";
        const [result]=await pool.query<Group[]>(sql);
        res.json(result);
    }


   static async getGroup( req:any, res:any){
   const sql="SELECT * FROM groupss WHERE id=?";
        const [result]=await pool.query<Group[]>(sql, [req.params.id]);
        if (result.length==0){
           return res.status(404).json({
                'text':'Pateiktas įrašas nerastas'
            });
        }else{
            res.json(result[0]);
        }
       
    }


     static async insert(req:any, res:any){
        const group:Group=req.body;

        const sql="INSERT INTO groupss (name, course_id, start_date, end_date) VALUES ( ?, ?, ?, ?)";
        const [result, fields]=await pool.query(sql, [group.name, group.course_id, group.start_date, group.end_date,]);
        const insertId=(result as any).insertId;
    


       res.status(201).json({
            "success":true
        })
    }


     static async update(req:any, res:any){
const sql="UPDATE groupss SET name=?, course_id=?, start_date=?, end_date=?  WHERE id=?";
     try{   
await pool.query(sql, [req.body.name, req.body.course_id, req.body.start_date, req.body.end_date, req.body.id]);
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
const sql="DELETE FROM groupss WHERE id=?";
        await pool.query(sql, [req.params.id]);
        res.json({
            "success":true
        })
    }
}
