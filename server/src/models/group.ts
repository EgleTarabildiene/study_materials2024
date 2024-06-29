import { RowDataPacket } from "mysql2";


export interface Group extends RowDataPacket{
    id?:number;
    name:string;
    
 
   
}