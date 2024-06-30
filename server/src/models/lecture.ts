import { RowDataPacket } from "mysql2";


export interface Lecture extends RowDataPacket{
    id?:number;
    name:string;
    description:string;
    lecture_date:Date;
  
    
 
   
}