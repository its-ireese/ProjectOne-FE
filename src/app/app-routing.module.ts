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
import { ReimbursementEditHttpComponent } from './Reimbursement/reimbursement-http/reimbursement-edit-http/reimbursement-edit-http.component';
import { ManagerHttpComponent } from './Manager/manager-http/manager-http.component';
import { EmployeePendingComponent } from './Employee/employee-pending/employee-pending.component';
import { EmployeeResolvedComponent } from './Employee/employee-resolved/employee-resolved.component';
import { ReimbursementComponent } from './Reimbursement/reimbursement/reimbursement.component';

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'home', component: HomeComponent},
  {path: 'managerHome', component: ManagerhomeComponent, canActivate: [AdminGuard]},
  {path: 'employeeHome', component: EmployeehomeComponent, canActivate: [AdminGuard]},
  {path: 'employeeProfile', component: EmployeeProfileComponent, canActivate: [AdminGuard]},
  {path: 'managerProfile', component: ManagerProfileComponent, canActivate: [AdminGuard]},
  {path: 'employee', component: HomeComponent, canActivate: [AdminGuard]},
  {path: 'all', component: ReimbursementComponent, canActivate: [AdminGuard]},
  {path: 'pending', component: PendingComponent, canActivate: [AdminGuard]},
  {path: 'resolved', component: ResolvedComponent, canActivate: [AdminGuard]},
  {path: 'shoes', component: ShoesHttpComponent},
  {path: 'mypending', component: EmployeePendingComponent, canActivate: [AdminGuard]},
  {path: 'myresolved', component: EmployeeResolvedComponent, canActivate: [AdminGuard]}, 
  {path: 'requestEdit', component: ReimbursementEditHttpComponent, canActivate: [AdminGuard]},
  {path: 'allEmployees', component: ManagerHttpComponent, canActivate: [AdminGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'empinfo', component: EmployeesComponent, canActivate: [AdminGuard]},
  {path: 'reimbursement', component: ReimbursementListHttpComponent, canActivate: [AdminGuard]}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

