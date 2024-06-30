import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { LecturesService } from '../../../services/lectures.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-lecture',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './new-lecture.component.html',
  styleUrl: './new-lecture.component.css'
})
export class NewLectureComponent {
    constructor (private lecturesService:LecturesService, private router:Router){

  }


 public lectureSubmit(form:NgForm){
    this.lecturesService.addLecture(form.form.value).subscribe((data)=>{
        this.router.navigate(['lectures', 'list']);
     });
    }
    
 
}