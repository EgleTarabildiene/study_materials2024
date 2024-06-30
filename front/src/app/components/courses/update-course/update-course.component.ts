import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesService } from '../../../services/courses.service';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { ErrorComponent } from '../../helper/error/error.component';

@Component({
  selector: 'app-update-course',
  standalone: true,
  imports: [CommonModule, FormsModule, ErrorComponent],
  templateUrl: './update-course.component.html',
  styleUrl: './update-course.component.css'
})
export class UpdateCourseComponent {
public id?:number;
public name:string="";
public isError=false;
public errorText="";


constructor (private route:ActivatedRoute, private router:Router, private coursesService:CoursesService){

this.coursesService.getCourse(this.route.snapshot.params['id']).subscribe({
  next:(course)=>{
  this.name=course.name;
 this.id=course.id;
  },
      error:(error)=>{
      console.log(error.error.text);
      this.isError=true;
      this.errorText=error.error.text;
      }
    });

}

public courseSubmit(form:NgForm){
 this.coursesService.updateCourse({id:this.id, ...form.form.value}).subscribe({
  next:(data)=>{
    this.router.navigate(['courses', 'list']);
  },      
 error:(error)=>{
      this.isError=true;
      this.errorText=error.error.text;
  }
      
})
 }
}