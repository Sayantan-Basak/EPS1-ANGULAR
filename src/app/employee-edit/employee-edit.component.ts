import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AAAEmployee } from '../AAAEmployee';
import { AaaemployeeserviceService } from '../aaaemployeeservice.service';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {

  public eid: any = this.aroute.snapshot.params['eid'];

  public selectedEmpId: any;

  public employeeData: any={};

  constructor(public restApi: AaaemployeeserviceService,
    public aroute: ActivatedRoute,
    public router: Router) { }

  ngOnInit(): void {

    this.restApi.getEmployeeById(this.eid).subscribe((data: {}) => {
      this.employeeData = data;
    })
    this.aroute.paramMap.subscribe(params => {
      this.selectedEmpId = params.get('id');
    });

  }

  updateEmployee() {
    this.restApi.updateEmployee( this.employeeData).subscribe(data =>
      this.router.navigate(['/app-emp-profile',this.eid]))
  }
}
