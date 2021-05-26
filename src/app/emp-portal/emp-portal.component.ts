import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AAAEmployee } from '../AAAEmployee';
import { AaaemployeeserviceService } from '../aaaemployeeservice.service';


@Component({
  selector: 'app-emp-portal',
  templateUrl: './emp-portal.component.html',
  styleUrls: ['./emp-portal.component.css']
})
export class EmpPortalComponent implements OnInit {

  //public selectedEmpId:any;
  public eid: any = this.aroute.snapshot.params['eid'];
  public employee: any = {};
  public salId:any;

  constructor(private router: Router,
    private aroute: ActivatedRoute,
    private restApi: AaaemployeeserviceService) { }

    

  ngOnInit(): void {
  /*this.aroute.paramMap.subscribe(params => {
    this.selectedEmpId = params.get('eid');

  });*/
  //this.selectedEmpId=this.aroute.snapshot.params['eid'];
  this.restApi.getEmployeeById(this.eid).subscribe(data => this.employee = data)


  }
  viewSalary(){
    this.router.navigate(['/app-emp-salary',this.salId]);

  }

}
