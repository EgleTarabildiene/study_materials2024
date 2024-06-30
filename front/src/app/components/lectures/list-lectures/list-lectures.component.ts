import { Component } from '@angular/core';
import { Lecture } from '../../../models/lecture';
import { LecturesService } from '../../../services/lectures.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { GroupsService } from '../../../services/groups.service';
import { Group } from '../../../models/group';

@Component({
  selector: 'app-list-lectures',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './list-lectures.component.html',
  styleUrl: './list-lectures.component.css'
})
export class ListLecturesComponent {
  public lectures:Lecture[]=[];
  public groups:Group[]=[];

  private loadLectures(){
    this.lecturesService.getLectures().subscribe((data)=>{
      this.lectures=data;
    });
  }

  private loadGroups(){
    this.groupsService.getGroups().subscribe((data)=>{
      this.groups=data;
    });
  }


  constructor (private lecturesService:LecturesService, private groupsService:GroupsService){
    this.loadLectures();
    this.loadGroups();
  }



  public deleteLecture(id:number){
    this.lecturesService.deleteLecture(id).subscribe((data)=>{
      this.loadLectures();
    });

  }

  public getGroupName(id:number){
    let result="";
    this.groups.forEach((group)=>{ 
      if (group.id==id) 
        result= group.name;
    });
    return result;
  }




}