import { Component } from '@angular/core';
import { Student } from '../../../models/student';
import { StudentsService } from '../../../services/students.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list-students',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './list-students.component.html',
  styleUrl: './list-students.component.css'
})
export class ListStudentsComponent {

  public students:Student[]=[];

  private loadStudents(){
    this.studentsService.getStudents().subscribe((data)=>{
      this.students=data;
    });
  }

  constructor (private studentsService:StudentsService){
    this.loadStudents();
  }

  public deleteStudent(id:number){
    this.studentsService.deleteStudent(id).subscribe((data)=>{
      this.loadStudents();
    });

  }
}