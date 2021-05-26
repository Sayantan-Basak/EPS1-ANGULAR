import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { RegistrationComponent } from './registration/registration.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EmpPortalComponent } from './emp-portal/emp-portal.component';
import { EmpProfileComponent } from './emp-profile/emp-profile.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { AdminPortalComponent } from './admin-portal/admin-portal.component';
import { ViewremempComponent } from './viewrememp/viewrememp.component';
import { EmpSalaryComponent } from './emp-salary/emp-salary.component';
import { SetSalaryComponent } from './set-salary/set-salary.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AdminloginComponent,
    RegistrationComponent,
    ForgotpasswordComponent,
    PagenotfoundComponent,
    EmpPortalComponent,
    EmpProfileComponent,
    EmployeeEditComponent,
    AdminPortalComponent,
    ViewremempComponent,
    EmpSalaryComponent,
    SetSalaryComponent,
    ChangePasswordComponent,
    ContactusComponent,
    AboutusComponent
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
