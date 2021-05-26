import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AAAEmployee } from './AAAEmployee';
import { aaasalary } from './aaasalary';
import { catchError, retry } from 'rxjs/operators'
import { throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AaaemployeeserviceService {


  private _url: string = "http://localhost:8080/EPSProj"
  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
      
    })
  }
  createEmployee(aaaemployee: any): Observable<AAAEmployee> {
    return this.http.post<AAAEmployee>(this._url + '/employee/create', JSON.stringify(aaaemployee), this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  
  }

  updateEmployee(aaaemployee: AAAEmployee): Observable<AAAEmployee> {
    return this.http.put<AAAEmployee>(this._url + '/employee/update', JSON.stringify(aaaemployee), this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));

  }

  getEmployeeById(eid: any): Observable<AAAEmployee> {
    return this.http.get<AAAEmployee>(this._url + '/employee/getEmp/' + eid, this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }

  getEmployees(): Observable<AAAEmployee[]> {
    return this.http.get<AAAEmployee[]>(this._url+'/employee/allemp');
  }

  deleteEmployee(eid: number) {
    console.log(eid);
    return this.http.delete<AAAEmployee>(this._url + '/employee/delete/' + eid, this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));

  }


  getSalaryById(sid: any): Observable<aaasalary> {
    console.log('service - sal id ==> ' + sid)
    return this.http.get<aaasalary>(this._url + '/salary/getSal/' + sid, this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }

  createSalary(aaasalary: any): Observable<aaasalary> {
    return this.http.post<aaasalary>(this._url + '/salary/createsal', JSON.stringify(aaasalary), this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  
  }


  updateSalary(aaasalary: aaasalary): Observable<aaasalary> {
    return this.http.put<aaasalary>(this._url + '/salary/updatesal', JSON.stringify(aaasalary), this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));

  }

  
  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code : ${error.status} \n  Error Message : ${error.message}`
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  
  }
}
