import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AaaemployeeserviceService } from '../aaaemployeeservice.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  public eid: any = this.aroute.snapshot.params['eid'];
  public employee: any = {};
  public currentpsw:any='';
  public newpsw:any='';
  public confirmpsw:any='';
  public msg:any='';

  constructor(private router: Router,
    private aroute: ActivatedRoute,
    private restApi: AaaemployeeserviceService) { }

  ngOnInit(): void {
    this.restApi.getEmployeeById(this.eid).subscribe(data => this.employee = data);

  }
  changepsw()
  {
    if (this.currentpsw!=this.employee.password)
    {
      this.msg="Old password incorrect";
      this.router.navigate(['/app-change-password/{{eid}}']);
    }
    else if (this.newpsw!=this.confirmpsw)
    {
      this.msg="Re-typed Password not matching";
      this.router.navigate(['/app-change-password/{{eid}}']);
    }
    else{
      this.msg="Password changed successfully";
      this.employee.password=this.newpsw;

      this.restApi.updateEmployee( this.employee).subscribe(data =>
        this.router.navigate(['/app-change-password/{{eid}}']))
      
    }

  }


}
