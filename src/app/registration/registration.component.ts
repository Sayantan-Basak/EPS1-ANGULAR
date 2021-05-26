import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AaaemployeeserviceService } from '../aaaemployeeservice.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  @Input()
  public employeeDetails = { eid:0 ,ename: '', dob:'' ,phone: 0, email: '',doj:'', gender:'',postHeld:'',address:'',password:'' };
  public msg1:any;
  //public dateofbirth: Date=new Date();
  public errdob:any;
  public dobbool: boolean=false;
  
  constructor(public router: Router,
    public restApi: AaaemployeeserviceService) { }


  ngOnInit(): void {
  }

  createEmployee() {

    //alert(JSON.stringify(this.employeeDetails));
    /*if (this.employeeDetails.eid==0)
    {
      this.msg1="Enter valid Employee Id";
      this.router.navigate(['/app-registration']);
    }*/
    this.restApi.createEmployee(this.employeeDetails).subscribe((data: {}) => { this.router.navigate(['/app-login']) })
  }

  validateDOB(dateofbirth:any){
    let year = new Date(dateofbirth).getFullYear();
    let today = new Date().getFullYear();
    if(today - year <=23){
      this.errdob="Too young to work";
      this.dobbool=true;
    }
    else {
      this.errdob='';
      this.dobbool=false;
    }
  }
}
