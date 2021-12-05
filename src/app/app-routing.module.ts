import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Homes/home/home.component';
import { LoginComponent } from './User/login/login.component';
import { LogoutComponent } from './User/logout/logout.component';
import { ManagerhomeComponent } from './Homes/managerhome/managerhome.component';
import { EmployeehomeComponent } from './Homes/employeehome/employeehome.component';
import { AdminGuard } from './User/admin.guard';
import { EmployeesComponent } from './Employee/employees/employees.component';
import { ShoesHttpComponent } from './shoe/shoes-http/shoes-http.component';
import { ReimbursementListHttpComponent } from './Reimbursement/reimbursement-http/reimbursement-list-http/reimbursement-list-http.component';
import { PendingComponent } from './Reimbursement/pending/pending.component';
import { ResolvedComponent } from './Reimbursement/resolved/resolved.component';
import { EmployeeProfileComponent } from './Employee/employee-profile/employee-profile.component';
import { ManagerProfileComponent } from './Manager/manager-profile/manager-profile.component';

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'home', component: HomeComponent},
  {path: 'managerHome', component: ManagerhomeComponent, canActivate: [AdminGuard]},
  {path: 'employeeHome', component: EmployeehomeComponent, canActivate: [AdminGuard]},
  {path: 'employeeProfile', component: EmployeeProfileComponent, canActivate: [AdminGuard]},
  {path: 'managerProfile', component: ManagerProfileComponent, canActivate: [AdminGuard]},
  {path: 'employee', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'pending', component: PendingComponent},
  {path: 'resolved', component: ResolvedComponent},
  {path: 'shoes', component: ShoesHttpComponent},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'empinfo', component: EmployeesComponent, canActivate: [AdminGuard]},
  {path: 'reimbursement', component: ReimbursementListHttpComponent, canActivate: [AdminGuard]},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

