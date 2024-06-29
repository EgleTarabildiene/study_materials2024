import { Component } from '@angular/core';
import { GroupsService } from '../../../services/groups.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-group',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './new-group.component.html',
  styleUrl: './new-group.component.css'
})
export class NewGroupComponent {
    constructor (private groupsService:GroupsService, private router:Router){

  }


 public groupSubmit(form:NgForm){
    this.groupsService.addGroup(form.form.value).subscribe((data)=>{
        this.router.navigate(['groups', 'list']);
     });
    }
    
 
}