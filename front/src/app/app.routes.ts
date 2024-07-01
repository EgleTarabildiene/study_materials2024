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
import { SigninComponent } from './components/auth/signin/signin.component';
import { LoginComponent } from './components/auth/login/login.component';
import { viewGuard } from './guards/view.guard';
import { ListUsersComponent } from './components/users/list-users/list-users.component';
import { UpdateUserComponent } from './components/users/update-user/update-user.component';
import { ProfileComponent } from './components/users/profile/profile.component';

export const routes: Routes = [
    {path:"courses/list", component:ListCoursesComponent},
    {path:"courses/new", component:NewCourseComponent},
    {path:"courses/:id", component:UpdateCourseComponent},


{path:"groups/list", component:ListGroupsComponent, canActivate:[viewGuard]

},
{path:"groups/new", component:NewGroupComponent},
{path:"groups/:id", component:UpdateGroupComponent},

{path:"lectures/list", component:ListLecturesComponent},
{path:"lectures/new", component:NewLectureComponent},
{path:"lectures/:id", component:UpdateLectureComponent},

    {path:"auth/signin", component:SigninComponent},
    {path:"auth/login", component:LoginComponent},

        {   
        path:"users/list",
        component:ListUsersComponent,
       
    },
    {
        path:"users/:id",
        component:UpdateUserComponent,
        
    },
   {
        path:"profile",
        component:ProfileComponent
    },


     {path:"", component:HomePageComponent},
];
