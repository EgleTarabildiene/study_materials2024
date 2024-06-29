import { Component } from '@angular/core';
import { CoursesService } from '../../../../services/courses.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Course } from '../../../../models/course';

@Component({
  selector: 'app-table-courses',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './table-courses.component.html',
  styleUrl: './table-courses.component.css'
})
export class TableCoursesComponent {
  public courses:Course[]=[];

  private loadCourses(){
    this.coursesService.getCourses().subscribe((data)=>{
      this.courses=data;
    });
  }

  constructor (private coursesService:CoursesService){
    this.loadCourses();
  }

  public deleteCourse(id:number){
    this.coursesService.deleteCourse(id).subscribe((data)=>{
      this.loadCourses();
    });

  }

}