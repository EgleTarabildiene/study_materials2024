import { Component } from '@angular/core';
import { StudentsService } from '../../../services/students.service';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-new-student',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './new-student.component.html',
  styleUrl: './new-student.component.css'
})
export class NewStudentComponent {


    constructor (private studentsService:StudentsService, private router:Router){

  }


 public studentSubmit(form:NgForm){
    this.studentsService.addStudent(form.form.value).subscribe((data)=>{
        this.router.navigate(['students', 'list']);
     });
    }
    
 
}