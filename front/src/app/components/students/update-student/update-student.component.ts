import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ErrorComponent } from '../../helper/error/error.component';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesService } from '../../../services/courses.service';
import { StudentsService } from '../../../services/students.service';

@Component({
  selector: 'app-update-student',
  standalone: true,
  imports: [CommonModule, FormsModule, ErrorComponent],
  templateUrl: './update-student.component.html',
  styleUrl: './update-student.component.css'
})
export class UpdateStudentComponent {
public id?:number;
public name:string="";
public surname:string="";
public isError=false;
public errorText="";


constructor (private route:ActivatedRoute, private router:Router, private studentsService:StudentsService){

this.studentsService.getStudent(this.route.snapshot.params['id']).subscribe({
  next:(student)=>{
  this.name=student.name;
  this.surname=student.surname;
 this.id=student.id;
  },
      error:(error)=>{
      console.log(error.error.text);
      this.isError=true;
      this.errorText=error.error.text;
      }
    });

}

public studentSubmit(form:NgForm){
 this.studentsService.updateStudent({id:this.id, ...form.form.value}).subscribe({
  next:(data)=>{
    this.router.navigate(['students', 'list']);
  },      
 error:(error)=>{
      this.isError=true;
      this.errorText=error.error.text;
  }
      
})
 }
}