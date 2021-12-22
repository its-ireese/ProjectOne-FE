import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './User/login/login.component';
import { ReimbursementComponent } from './Reimbursement/reimbursement/reimbursement.component';
import { UsersComponent } from './User/users/users.component';
import { EmployeesComponent } from './Employee/employees/employees.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './Homes/home/home.component';
import { LogoutComponent } from './User/logout/logout.component';
import { ShoesComponent } from './shoe/shoes/shoes.component';
import { ReimbursementListHttpComponent } from './Reimbursement/reimbursement-http/reimbursement-list-http/reimbursement-list-http.component';
import { ReimbursementEditHttpComponent } from './Reimbursement/reimbursement-http/reimbursement-edit-http/reimbursement-edit-http.component';
import { ManagerhomeComponent } from './Homes/managerhome/managerhome.component';
import { EmployeehomeComponent } from './Homes/employeehome/employeehome.component';
import { ManagerHttpComponent } from './Manager/manager-http/manager-http.component';
import { ShoesHttpComponent } from './shoe/shoes-http/shoes-http.component';
import { PendingComponent } from './Reimbursement/pending/pending.component';
import { ResolvedComponent } from './Reimbursement/resolved/resolved.component';
import { EmployeeProfileComponent } from './Employee/employee-profile/employee-profile.component';
import { ManagerProfileComponent } from './Manager/manager-profile/manager-profile.component';
import { EmployeePendingComponent } from './Employee/employee-pending/employee-pending.component';
import { EmployeeResolvedComponent } from './Employee/employee-resolved/employee-resolved.component';
import { EmployeeReimbursementComponent } from './Employee/employee-reimbursement/employee-reimbursement.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ReimbursementComponent,
    UsersComponent,
    EmployeesComponent,
    HeaderComponent,
    HomeComponent,
    ShoesComponent,
    LogoutComponent,
    ReimbursementEditHttpComponent,
    ReimbursementListHttpComponent,
    ManagerhomeComponent,
    EmployeehomeComponent,
    ManagerHttpComponent,
    ShoesHttpComponent,
    PendingComponent,
    ResolvedComponent,
    EmployeeProfileComponent,
    ManagerProfileComponent,
    EmployeePendingComponent,
    EmployeeResolvedComponent,
    EmployeeReimbursementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
