import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormsModule, NgForm } from '@angular/forms';
import { CoursesService } from '../../../services/courses.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-course',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './new-course.component.html',
  styleUrl: './new-course.component.css'
})
export class NewCourseComponent {

    constructor (private coursesService:CoursesService, private router:Router){

  }


 public courseSubmit(form:NgForm){
    this.coursesService.addCourse(form.form.value).subscribe((data)=>{
        this.router.navigate(['courses', 'list']);
     });
    }
    
 
}