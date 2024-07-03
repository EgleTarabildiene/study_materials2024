import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ErrorComponent } from '../../helper/error/error.component';
import { ActivatedRoute, Router } from '@angular/router';
import { LecturesService } from '../../../services/lectures.service';
import { Group } from '../../../models/group';
import { GroupsService } from '../../../services/groups.service';

@Component({
  selector: 'app-update-lecture',
  standalone: true,
  imports: [CommonModule, FormsModule, ErrorComponent],
  templateUrl: './update-lecture.component.html',
  styleUrl: './update-lecture.component.css'
})
export class UpdateLectureComponent {

public groups:Group[]=[];
public groupId:number|null=null;


public id?:number;
public name:string="";
public description:string="";
public lecture_date:string="";
public isError=false;
public errorText="";




constructor (private route:ActivatedRoute, private router:Router, private lecturesService:LecturesService,groupsService:GroupsService,){
   groupsService.getGroups().subscribe({
      next:(groups)=>{
        this.groups=groups;
      }
    })






this.lecturesService.getLecture(this.route.snapshot.params['id']).subscribe({
  next:(lecture)=>{
    this.name=lecture.name;
    this.description=lecture.description;
    this.groupId=lecture.group_id;
    this.id=lecture.id;
    this.lecture_date=lecture.lecture_date;
  },
    error:(error)=>{
      console.log(error.error.text);
      this.isError=true;
      this.errorText=error.error.text;
      }
    });

}

public lectureSubmit(form:NgForm){
 this.lecturesService.updateLecture({id:this.id, ...form.form.value}).subscribe({
  next:(data)=>{
    this.router.navigate(['lectures', 'list']);
  },
  error:(error)=>{
      this.isError=true;
      this.errorText=error.error.text;
  }
      
})
 }
}