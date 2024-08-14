import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes =
 [{ path: 'users',canActivate: [AuthGuard], loadChildren: () => import('./users/users.module').then(m => m.UsersModule)},
{path:"",component:LoginComponent},
{path:"home",canActivate: [AuthGuard],component:DashboardComponent},
{path:'**',redirectTo:""}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

