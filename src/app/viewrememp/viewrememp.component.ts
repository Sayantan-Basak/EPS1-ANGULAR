import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AAAEmployee } from '../AAAEmployee';
import { AaaemployeeserviceService } from '../aaaemployeeservice.service';


@Component({
  selector: 'app-viewrememp',
  templateUrl: './viewrememp.component.html',
  styleUrls: ['./viewrememp.component.css']
})
export class ViewremempComponent implements OnInit {
  public employees : any = [];
  public selectedId: number = 0;

  constructor(private empService: AaaemployeeserviceService, private router: Router) { }

  ngOnInit(): void {
    this.empService.getEmployees().subscribe(data => this.employees = data)

  }

  onDelete(employees: AAAEmployee) {
    this.selectedId = employees.eid;
    if (window.confirm('Are you sure, you want to delete?')) {
      this.empService.deleteEmployee(this.selectedId).subscribe(data => {
        this.router.navigate(['/app-viewrememp'])
      })
    }
  }

}
