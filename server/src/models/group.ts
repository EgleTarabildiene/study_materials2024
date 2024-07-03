import { RowDataPacket } from "mysql2";





export interface ResultGroupsStudents extends RowDataPacket{
    id:number; 
    name: string;
    surname: string
   
}


export interface Group extends RowDataPacket{
    id?:number;
    name:string;
    course_id:number;
    
    start_date:string;
    end_date:string;

    students:ResultGroupsStudents[];
  
    
 
   
}