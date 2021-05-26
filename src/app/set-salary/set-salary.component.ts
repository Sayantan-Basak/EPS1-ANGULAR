import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AaaemployeeserviceService } from '../aaaemployeeservice.service';

@Component({
  selector: 'app-set-salary',
  templateUrl: './set-salary.component.html',
  styleUrls: ['./set-salary.component.css']
})
export class SetSalaryComponent implements OnInit {
  @Input()
  public salaryDetails = { sid:0 ,eid:0 ,basic:0,da:0,hra:0,ta:0,pa:0,gross:0,inTax:0,pf:0,net:0, postHeld:'' ,payScale:'',medInsurance:0};
  payScaleVal:any;
  postHeldVal:any;
  perfAllow: any;

  constructor(public router: Router,
    public restApi: AaaemployeeserviceService) { }

  ngOnInit(): void {
  }
  createSalary(){
    if (this.salaryDetails.postHeld=='Senior Manager')
    this.postHeldVal=30000;
    if (this.salaryDetails.postHeld=='Manager')
    this.postHeldVal=28000;
    if (this.salaryDetails.postHeld=='Deputy Manager')
    this.postHeldVal=25000;
    if (this.salaryDetails.postHeld=='Associate')
    this.postHeldVal=20000;
    if (this.salaryDetails.postHeld=='Assistant')
    this.postHeldVal=18000;


    if (this.salaryDetails.payScale=='A')
    this.payScaleVal=10000;
    if (this.salaryDetails.payScale=='B')
    this.payScaleVal=8000;
    if (this.salaryDetails.payScale=='C')
    this.payScaleVal=5000;

    this.salaryDetails.basic=this.postHeldVal+this.payScaleVal;

    this.salaryDetails.da=0.1*this.salaryDetails.basic;
    this.salaryDetails.hra=0.15*this.salaryDetails.basic;
    this.salaryDetails.ta=0.05*this.salaryDetails.basic;
    this.salaryDetails.pa=(this.perfAllow/100)*this.salaryDetails.basic;

    this.salaryDetails.gross=this.salaryDetails.basic+this.salaryDetails.da+this.salaryDetails.hra+this.salaryDetails.ta+this.salaryDetails.pa;

    this.salaryDetails.inTax=0.07*this.salaryDetails.gross;
    this.salaryDetails.pf=0.07*this.salaryDetails.basic;

    this.salaryDetails.net=this.salaryDetails.gross-this.salaryDetails.inTax-this.salaryDetails.pf;



    if (this.salaryDetails.postHeld=='Senior Manager')
    this.salaryDetails.medInsurance=300000;
    if (this.salaryDetails.postHeld=='Manager')
    this.salaryDetails.medInsurance=250000;
    if (this.salaryDetails.postHeld=='Deputy Manager')
    this.salaryDetails.medInsurance=200000;
    if (this.salaryDetails.postHeld=='Associate')
    this.salaryDetails.medInsurance=150000;
    if (this.salaryDetails.postHeld=='Assistant')
    this.salaryDetails.medInsurance=100000;



    this.restApi.createSalary(this.salaryDetails).subscribe((data: {}) => { this.router.navigate(['/app-admin-portal']) })

  }

  /*
  updateSalary(){
    if (this.salaryDetails.postHeld=='Senior Manager')
    this.postHeldVal=30000;
    else if (this.salaryDetails.postHeld=='Manager')
    this.postHeldVal=28000;
    else if (this.salaryDetails.postHeld=='Deputy Manager')
    this.postHeldVal=25000;
    else if (this.salaryDetails.postHeld=='Associate')
    this.postHeldVal=20000;
    else if (this.salaryDetails.postHeld=='Assistant')
    this.postHeldVal=18000;


    if (this.salaryDetails.payScale=='A')
    this.payScaleVal=10000;
    else if (this.salaryDetails.postHeld=='B')
    this.payScaleVal=8000;
    else if (this.salaryDetails.postHeld=='C')
    this.payScaleVal=5000;

    this.salaryDetails.basic=this.postHeldVal+this.payScaleVal;

    this.salaryDetails.da=0.1*this.salaryDetails.basic;
    this.salaryDetails.hra=0.15*this.salaryDetails.basic;
    this.salaryDetails.ta=0.05*this.salaryDetails.basic;
    this.salaryDetails.pa=(this.perfAllow/100)*this.salaryDetails.basic;

    this.salaryDetails.gross=this.salaryDetails.basic+this.salaryDetails.da+this.salaryDetails.hra+this.salaryDetails.ta+this.salaryDetails.pa;

    this.salaryDetails.inTax=0.07*this.salaryDetails.gross;
    this.salaryDetails.pf=0.07*this.salaryDetails.basic;

    this.salaryDetails.net=this.salaryDetails.gross-this.salaryDetails.inTax-this.salaryDetails.pf;

    this.restApi.updateSalary( this.salaryDetails).subscribe(data =>
      this.router.navigate(['/app-admin-portal']))

  }
  */
}
