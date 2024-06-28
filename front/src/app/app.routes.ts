import { Routes } from '@angular/router';
import { ListCoursesComponent } from './components/courses/list-courses/list-courses.component';
import { NewCourseComponent } from './components/courses/new-course/new-course.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { UpdateCourseComponent } from './components/courses/update-course/update-course.component';

export const routes: Routes = [
    {path:"courses/list",component:ListCoursesComponent},
    {path:"courses/new", component:NewCourseComponent},
    {path:"courses/:id", component:UpdateCourseComponent},

     {path:"", component:HomePageComponent},
];
