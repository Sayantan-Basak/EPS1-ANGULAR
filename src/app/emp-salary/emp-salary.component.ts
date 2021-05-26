import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AaaemployeeserviceService } from '../aaaemployeeservice.service';
import { AAAEmployee} from '../AAAEmployee';
import { aaasalary} from '../aaasalary';

@Component({
  selector: 'app-emp-salary',
  templateUrl: './emp-salary.component.html',
  styleUrls: ['./emp-salary.component.css']
})
export class EmpSalaryComponent implements OnInit {

  constructor(public restApi: AaaemployeeserviceService,
    public aroute: ActivatedRoute,
    public router: Router) { }


    public salId: any = this.aroute.snapshot.params['sid'];
  public employee: any ={};
  public salaryId: any ;
  public salary: any={} ;
  public medInsure: any='';
  public click:boolean= true;
  public click2:boolean= false;

  ngOnInit(): void {
   /* this.restApi.getEmployeeById(this.eid).subscribe((empdata: {}) => {
      this.employee = empdata;
      console.log('emp data ===>'+empdata);
    }); 
    this.salaryId=this.employee.salId;*/

    this.restApi.getSalaryById(this.salId).subscribe((saldata:{}) => {
    this.salary = saldata});

  }

  obtainMedIn(){

    this.click=false;
    this.click2=true;
  }


  showMedIn(){
    this.medInsure=" Medical Insurance Paid:"+ this.salary.medInsurance;
    this.click=true;
    this.router.navigate(['/app-emp-salary/{{sid}}'])

  }


}


