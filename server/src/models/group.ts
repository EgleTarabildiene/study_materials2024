import { RowDataPacket } from "mysql2";


export interface Group extends RowDataPacket{
    id?:number;
    lecturer_id:number;
    name:string;
    course_id:number;
    start_date:Date;
    end_date:Date
}