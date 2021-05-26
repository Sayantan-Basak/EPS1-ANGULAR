import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  public aid = 0;
  public psw ='';
  public errormsg:any;

  route: any;
  constructor(public router : Router) { }

  ngOnInit(): void {
  }

  onClick(){
    if (this.aid==12345 && this.psw=="admin123") {
      this.router.navigate(['/app-admin-portal']);
    }
    else
    {
      this.errormsg="Wrong Admin ID or password";
      this.router.navigate(['/app-adminlogin']);

    }
  }

}
