import { Component } from '@angular/core';
import { FilterCoursesComponent } from './filter-courses/filter-courses.component';
import { TableCoursesComponent } from './table-courses/table-courses.component';

@Component({
  selector: 'app-list-courses',
  standalone: true,
  imports: [FilterCoursesComponent, TableCoursesComponent],
  templateUrl: './list-courses.component.html',
  styleUrl: './list-courses.component.css'
})
export class ListCoursesComponent {

}
