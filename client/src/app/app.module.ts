import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatGridListModule} from '@angular/material/grid-list';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BoardAdminComponent } from './components/board-admin/board-admin.component';
import { BoardModeratorComponent } from './components/board-moderator/board-moderator.component';
import { BoardUserComponent } from './components/board-user/board-user.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { EditProfilComponent } from './components/edit_profil/edit_profil.component';
import  {EditImageComponent} from "./components/edit_image/edit_image.component";
import { AddNewProblemComponent } from './components/add-new-problem/add-new-problem.component';
import {MatInputModule} from "@angular/material/input";
import { ProblemService } from './services/problem/problem.service';
import { ShowProblemDetailsComponent } from './components/show-problem-details/show-problem-details.component';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from "@angular/material/button";
import {MaterialModule} from "./Material.Module";
import { ShowProblemImageDialogComponent } from './components/show-problem-image-dialog/show-problem-image-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import { UserAddFormComponent } from './components/user-forms/user-add-form/user-add-form.component';
import { UserEditFormComponent } from './components/user-forms/user-edit-form/user-edit-form.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { UnauthorizedComponent } from './components/unauthorized/unauthorized.component';
import { UserDeleteFormComponent } from './components/user-forms/user-delete-form/user-delete-form.component';
import { AuthGuard } from './guards/auth/auth.guard';
import { StudentGuard } from './guards/student/student.guard';
import { AdminGuard } from './guards/admin/admin.guard';
import { WorkerGuard } from './guards/worker/worker.guard';
@NgModule({
  declarations: [
    AppComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    EditProfilComponent,
    EditImageComponent,
    AddNewProblemComponent,
    ShowProblemDetailsComponent,
    ShowProblemImageDialogComponent,
    NotfoundComponent,
    UnauthorizedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    UserListComponent,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatInputModule,
    MatGridListModule,
    MatTableModule,
    MatButtonModule,
    MaterialModule,
    MatDialogModule,
  ],
  providers: [AuthGuard,StudentGuard,AdminGuard,WorkerGuard],
  entryComponents:[UserAddFormComponent,UserEditFormComponent,UserDeleteFormComponent
  ],
  bootstrap: [AppComponent,HomeComponent],
})
export class AppModule {}