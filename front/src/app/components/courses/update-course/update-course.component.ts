import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesService } from '../../../services/courses.service';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-update-course',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './update-course.component.html',
  styleUrl: './update-course.component.css'
})
export class UpdateCourseComponent {
public id?:number;
public name:string="";



constructor (private route:ActivatedRoute, private router:Router, private coursesService:CoursesService){


this.coursesService.getCourse(this.route.snapshot.params['id']).subscribe((course)=>{
  this.name=course.name;
 this.id=course.id;
});

}

public courseSubmit(form:NgForm){
 this.coursesService.updateCourse({id:this.id, ...form.form.value}).subscribe((data)=>{
    
        this.router.navigate(['courses', 'list']);
      
})
 }
}