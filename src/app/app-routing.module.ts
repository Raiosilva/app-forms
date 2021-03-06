import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { FormListComponent } from './forms/form-list/form-list.component';
import { FormEditComponent } from './forms/form-edit/form-edit.component';
import { AnswerListComponent } from './answers/answer-list/answer-list.component';
import { AnswerNewComponent } from './answers/answer-new/answer-new.component';
import { LoginComponent } from './users/login/login.component';
import { RegisterComponent } from './users/register/register.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forms', component: FormListComponent, canActivate: []},
  { path: 'forms/:id', component: FormEditComponent, canActivate: []},
  { path: 'forms/new', component: FormEditComponent, canActivate: []},
  { path: 'answers', component: AnswerNewComponent, canActivate: []},
  { path: 'answers/:id', component: AnswerListComponent, canActivate: []},
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
