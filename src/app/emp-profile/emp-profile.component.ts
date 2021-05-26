import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AaaemployeeserviceService } from '../aaaemployeeservice.service';
import { AAAEmployee } from '../AAAEmployee';
@Component({
  selector: 'app-emp-profile',
  templateUrl: './emp-profile.component.html',
  styleUrls: ['./emp-profile.component.css']
})
export class EmpProfileComponent implements OnInit {

  public eid: any = this.aroute.snapshot.params['eid'];
  public employee: any = {};

  constructor(public restApi: AaaemployeeserviceService,
    public aroute: ActivatedRoute,
    public router: Router) { }

  ngOnInit(): void {
    
    this.restApi.getEmployeeById(this.eid).subscribe(data => this.employee = data)
    
  }

}
