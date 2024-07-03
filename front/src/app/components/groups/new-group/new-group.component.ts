import { Component } from '@angular/core';
import { GroupsService } from '../../../services/groups.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Course } from '../../../models/course';
import { CoursesService } from '../../../services/courses.service';
import { Student } from '../../../models/student';
import { StudentsService } from '../../../services/students.service';

@Component({
  selector: 'app-new-group',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './new-group.component.html',
  styleUrl: './new-group.component.css'
})
export class NewGroupComponent {

public courses:Course[]=[];
public courseId:number|null=null;
public students:Student[]=[];
public student_id:number|null=null;

public groupStudents:{
  student_id:number,
  }[]=[];



    constructor (private groupsService:GroupsService, private router:Router, private coursesService:CoursesService, studentsService:StudentsService){
coursesService.getCourses().subscribe({
  next:(courses)=>{
    this.courses=courses;
  }
})
studentsService.getStudents().subscribe({
  next:(students)=>{
    this.students=students;
  }
})




}


 public groupSubmit(form:NgForm){
    this.groupsService.addGroup(form.form.value).subscribe((data)=>{
        this.router.navigate(['/groups', 'list']);
     });
    }
    


      public addStudentToOrder(){
    if (this.student_id!=null){
      this.groupStudents.push({
        student_id:this.student_id,
        
        
      });
      console.log(this.groupStudents);
    }
  }
 
  public getStudentName(id:number){
    let result="";
    this.students.forEach((student)=>{ 
      if (student.id==id) 
        result= student.name;
    });
    return result;
  }

}