import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AaaemployeeserviceService } from '../aaaemployeeservice.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  public eid: any=0;
  public employee: any = {};
  public psw1:any='';
  public psw2:any='';
  public msg:any='';
  public msg1:any='';

  constructor(private router: Router,
    private aroute: ActivatedRoute,
    private restApi: AaaemployeeserviceService) { }

  ngOnInit(): void {

  }

  onClick() {


    if (this.psw1!=this.psw2)
    {
      this.msg="Re-typed Password not matching";
      this.msg1='';
    this.router.navigate(['/app-forgotpassword']);
    }
    else
    {
      this.restApi.getEmployeeById(this.eid).subscribe(data => this.employee = data);
      this.msg='';
      this.msg1="Password recovered successfully";

      this.employee.password=this.psw2;

      this.restApi.updateEmployee( this.employee).subscribe(data =>
        this.router.navigate(['/app-forgotpassword']))
    }
  }
}
