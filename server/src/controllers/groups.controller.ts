import { pool } from "../db/connect";
import { Group } from "../models/group"; 


export class GroupsController{
    static async getAll( req:any, res:any){
   
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
        const sql="INSERT INTO groupss (name) VALUES ( ? )";
        await pool.query(sql, [req.body.name]);
       res.status(201).json({
            "success":true
        })
    }


     static async update(req:any, res:any){
const sql="UPDATE groupss SET name=? WHERE id=?";
     try{   
await pool.query(sql, [req.body.name, req.body.id]);
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
