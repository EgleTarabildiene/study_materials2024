import { pool } from "../db/connect";
import { Group } from "../models/group"; 


export class GroupsController{
    static async getAll( req:any, res:any){
   
        const sql="SELECT * FROM groups";
        const [result]=await pool.query<Group[]>(sql);
        res.json(result);
    }
}