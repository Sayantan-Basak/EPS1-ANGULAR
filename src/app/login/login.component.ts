import { Component, OnInit } from '@angular/core';
import { Router ,ParamMap, ActivatedRoute,} from '@angular/router';
import { AaaemployeeserviceService } from '../aaaemployeeservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public eid=0;

  public psw='';

  public selectedEmpId: any;
  public errormsg:any;

  public employeeData: any = {};
  constructor(public router: Router,
    public aroute: ActivatedRoute,
    public restApi: AaaemployeeserviceService) { }

  ngOnInit(): void {
  this.aroute.paramMap.subscribe(params => {
    this.selectedEmpId = params.get('eid');

  });
}

  onClick() {
    this.restApi.getEmployeeById(this.eid).subscribe((data: {}) => {
      this.employeeData = data;
    })
    if(this.employeeData.password==this.psw)
    {
    this.router.navigate(['/app-emp-portal',this.eid]);
    }
    else
    {
      this.errormsg="Wrong Employee ID or password";
      this.router.navigate(['/app-login']);
     

    }
  }


}
