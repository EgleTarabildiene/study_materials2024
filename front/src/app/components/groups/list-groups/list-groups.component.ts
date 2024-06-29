import { Component } from '@angular/core';
import { FilterGroupsComponent } from './filter-groups/filter-groups.component';
import { TableGroupsComponent } from './table-groups/table-groups.component';

@Component({
  selector: 'app-list-groups',
  standalone: true,
  imports: [FilterGroupsComponent, TableGroupsComponent],
  templateUrl: './list-groups.component.html',
  styleUrl: './list-groups.component.css'
})
export class ListGroupsComponent {

}
