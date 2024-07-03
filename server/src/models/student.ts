import { RowDataPacket } from "mysql2";


export interface Student extends RowDataPacket{
    id?:number;
    name:string;
    surname:string;
 
}