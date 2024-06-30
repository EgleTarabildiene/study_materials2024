import { Component } from '@angular/core';
import { Lecture } from '../../../models/lecture';
import { LecturesService } from '../../../services/lectures.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list-lectures',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './list-lectures.component.html',
  styleUrl: './list-lectures.component.css'
})
export class ListLecturesComponent {
  public lectures:Lecture[]=[];

  private loadLectures(){
    this.lecturesService.getLectures().subscribe((data)=>{
      this.lectures=data;
    });
  }

  constructor (private lecturesService:LecturesService){
    this.loadLectures();
  }

  public deleteLecture(id:number){
    this.lecturesService.deleteLecture(id).subscribe((data)=>{
      this.loadLectures();
    });

  }

}