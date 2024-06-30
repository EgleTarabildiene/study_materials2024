import { Routes } from '@angular/router';
import { ListCoursesComponent } from './components/courses/list-courses/list-courses.component';
import { NewCourseComponent } from './components/courses/new-course/new-course.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { UpdateCourseComponent } from './components/courses/update-course/update-course.component';
import { NewGroupComponent } from './components/groups/new-group/new-group.component';
import { UpdateGroupComponent } from './components/groups/update-group/update-group.component';
import { ListGroupsComponent } from './components/groups/list-groups/list-groups.component';
import { ListLecturesComponent } from './components/lectures/list-lectures/list-lectures.component';
import { NewLectureComponent } from './components/lectures/new-lecture/new-lecture.component';
import { UpdateLectureComponent } from './components/lectures/update-lecture/update-lecture.component';

export const routes: Routes = [
    {path:"courses/list", component:ListCoursesComponent},
    {path:"courses/new", component:NewCourseComponent},
    {path:"courses/:id", component:UpdateCourseComponent},


{path:"groups/list", component:ListGroupsComponent},
{path:"groups/new", component:NewGroupComponent},
{path:"groups/:id", component:UpdateGroupComponent},

{path:"lectures/list", component:ListLecturesComponent},
{path:"lectures/new", component:NewLectureComponent},
{path:"lectures/:id", component:UpdateLectureComponent},




     {path:"", component:HomePageComponent},
];
