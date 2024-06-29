import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GroupsService } from '../../../services/groups.service';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from '../../helper/error/error.component';

@Component({
  selector: 'app-update-group',
  standalone: true,
  imports: [CommonModule, FormsModule, ErrorComponent],
  templateUrl: './update-group.component.html',
  styleUrl: './update-group.component.css'
})
export class UpdateGroupComponent {
public id?:number;
public name:string="";
public isError=false;
public errorText="";




constructor (private route:ActivatedRoute, private router:Router, private groupsService:GroupsService){


this.groupsService.getGroup(this.route.snapshot.params['id']).subscribe({
  next:(group)=>{
    this.name=group.name;
    this.id=group.id;
  },
    error:(error)=>{
      console.log(error.error.text);
      this.isError=true;
      this.errorText=error.error.text;
      }
    });

}

public groupSubmit(form:NgForm){
 this.groupsService.updateGroup({id:this.id, ...form.form.value}).subscribe({
  next:(data)=>{
    this.router.navigate(['groups', 'list']);
  },
  error:(error)=>{
      this.isError=true;
      this.errorText=error.error.text;
  }
      
})
 }
}


