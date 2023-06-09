import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { BoardAdminComponent } from './components/board-admin/board-admin.component';
import { ProfileComponent } from './components/profile/profile.component';
import { EditProfilComponent } from './components/edit_profil/edit_profil.component';
import { BoardModeratorComponent } from './components/board-moderator/board-moderator.component';
import { BoardUserComponent } from './components/board-user/board-user.component';
import { EditImageComponent } from './components/edit_image/edit_image.component';
import { AddNewProblemComponent } from './components/add-new-problem/add-new-problem.component';
import { ShowProblemDetailsComponent } from './components/show-problem-details/show-problem-details.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { UnauthorizedComponent } from './components/unauthorized/unauthorized.component';
import { AuthGuard } from './guards/auth/auth.guard';
import { AdminGuard } from './guards/admin/admin.guard';
import { StudentGuard } from './guards/student/student.guard';
import { WorkerGuard } from './guards/worker/worker.guard';
import { AdminOrUserGuard } from './guards/admin-or-user/admin-or-user.guard';
import { AdminOrWorkerGuard } from './guards/admin-or-worker/admin-or-worker.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {path:'home',component:HomeComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  {
    path: 'edit_profile',
    component: EditProfilComponent,
    canActivate: [AuthGuard],
  },
  { path: 'user', component: BoardUserComponent, canActivate: [StudentGuard] },
  {
    path: 'worker',
    component: BoardModeratorComponent,
    canActivate: [WorkerGuard],
  },
  { path: 'admin', component: BoardAdminComponent, canActivate: [AdminGuard] },
  { path: 'users', component: UserListComponent, canActivate: [AdminGuard] },
  {
    path: 'edit_image',
    component: EditImageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'addProblem',
    component: AddNewProblemComponent,
    canActivate: [AdminOrUserGuard],
  },
  {
    path: 'showProblemDetails',
    component: ShowProblemDetailsComponent,
    canActivate: [AdminOrWorkerGuard],
  },
  { path: 'unauthorized', component: UnauthorizedComponent },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
