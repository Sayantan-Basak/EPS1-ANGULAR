import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AdminPortalComponent } from './admin-portal/admin-portal.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AppComponent } from './app.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ContactusComponent } from './contactus/contactus.component';
import { EmpPortalComponent } from './emp-portal/emp-portal.component';
import { EmpProfileComponent } from './emp-profile/emp-profile.component';
import { EmpSalaryComponent } from './emp-salary/emp-salary.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RegistrationComponent } from './registration/registration.component';
import { SetSalaryComponent } from './set-salary/set-salary.component';
import {ViewremempComponent} from './viewrememp/viewrememp.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  //{path: 'app-root', component:AppComponent},
  { path: 'app-home', component: HomeComponent },
  { path: 'app-login', component: LoginComponent },
  { path: 'app-registration', component: RegistrationComponent },
  { path: 'app-adminlogin', component: AdminloginComponent },
  { path: 'app-forgotpassword', component: ForgotpasswordComponent },
  { path: 'app-emp-portal/:eid', component: EmpPortalComponent },
  { path: 'app-emp-profile/:eid', component: EmpProfileComponent },
  { path: 'app-employee-edit/:eid', component: EmployeeEditComponent },
  {path: 'app-admin-portal', component: AdminPortalComponent },
  {path: 'app-viewrememp', component:ViewremempComponent},
  {path: 'app-emp-salary/:sid', component:EmpSalaryComponent},
  {path: 'app-set-salary', component:SetSalaryComponent},
  {path: 'app-change-password/:eid', component:ChangePasswordComponent},
  { path: 'app-contactus', component:ContactusComponent},
  {path: 'app-aboutus', component:AboutusComponent},
  { path: '**', component: PagenotfoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
