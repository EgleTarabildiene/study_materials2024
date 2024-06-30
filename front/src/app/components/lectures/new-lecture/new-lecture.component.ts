import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { LecturesService } from '../../../services/lectures.service';
import { Router } from '@angular/router';
import { GroupsService } from '../../../services/groups.service';
import { Group } from '../../../models/group';

@Component({
  selector: 'app-new-lecture',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './new-lecture.component.html',
  styleUrl: './new-lecture.component.css'
})
export class NewLectureComponent {


public groups:Group[]=[];
public groupId:number|null=null;


    constructor (private lecturesService:LecturesService, private router:Router, private groupsService:GroupsService){
groupsService.getGroups().subscribe({
  next:(groups)=>{
    this.groups=groups;
  }
})
  }


 public lectureSubmit(form:NgForm){
    this.lecturesService.addLecture(form.form.value).subscribe((data)=>{
        this.router.navigate(['lectures', 'list']);
     });
    }
    
 
}