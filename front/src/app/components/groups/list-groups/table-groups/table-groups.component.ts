import { Component } from '@angular/core';
import { Group } from '../../../../models/group';
import { GroupsService } from '../../../../services/groups.service';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-table-groups',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './table-groups.component.html',
  styleUrl: './table-groups.component.css'
})
export class TableGroupsComponent {
  public groups:Group[]=[];

  private loadGroups(){
    this.groupsService.getGroups().subscribe((data)=>{
      this.groups=data;
    });
  }

  constructor (private groupsService:GroupsService){
    this.loadGroups();
  }

  public deleteGroup(id:number){
    this.groupsService.deleteGroup(id).subscribe((data)=>{
      this.loadGroups();
    });

  }

}