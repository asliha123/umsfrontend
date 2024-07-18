import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipe } from './userPipes/filter.pipe';
import { SortPipe } from './userPipes/sort.pipe';
import {NgxPaginationModule} from 'ngx-pagination';
import { SearchpipePipe } from './userPipes/searchpipe.pipe'; 
@NgModule({
  declarations: [
    UsersComponent,
    AllUsersComponent,
    AddUserComponent,
    EditUserComponent,
    FilterPipe,
    SortPipe,
    SearchpipePipe
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule
  ]
})
export class UsersModule { }
