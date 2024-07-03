
export class Group {

    constructor (
        public name:string,
        public course_id:number,
        public start_date:string,
        public end_date:string,
        public id?:number,
        public students?:{
            student_id:number
          
        }
    
       
    ){}
   
}