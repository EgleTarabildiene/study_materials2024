import { Component } from '@angular/core';
import { Group } from '../../../../models/group';
import { GroupsService } from '../../../../services/groups.service';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { CoursesService } from '../../../../services/courses.service';
import { Course } from '../../../../models/course';
import { AuthService } from '../../../../services/auth.service';

@Component({
  selector: 'app-table-groups',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './table-groups.component.html',
  styleUrl: './table-groups.component.css'
})
export class TableGroupsComponent {
  public groups:Group[]=[];
    public courses:Course[]=[];

  private loadGroups(){
    this.groupsService.getGroups().subscribe((data)=>{
      this.groups=data;
    });
  }

private loadCourses(){
  this.coursesService.getCourses().subscribe((data)=>{
    this.courses=data;
    });
  }


  constructor (private groupsService:GroupsService, private coursesService:CoursesService, public authService:AuthService){
    this.loadGroups();
    this.loadCourses();
  }

  public deleteGroup(id:number){
    this.groupsService.deleteGroup(id).subscribe((data)=>{
      this.loadGroups();
    });

  }

  public getCourseName(id:number){
    let result="";
    this.courses.forEach((course)=>{ 
      if (course.id==id) 
        result= course.name;
    });
    return result;
  }

/*
    public getLecturerName(id:number){
    let result="";
    this.lecturers.forEach((lecturer)=>{ 
      if (lecturer.id==id) 
        result= `${lecturer.name} ${lecturer.surname}`;
    });
    return result;
  }
*/

}