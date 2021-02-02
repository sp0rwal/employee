import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  url : string = "http://localhost:3000/";
  url1 : string = "http://localhost:3000/employees/3"
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http:HttpClient) { }

  getEmployees():any
  {
    return this.http.get(this.url+'employees',this.httpOptions);
  }
  deleteEmployee(id:number):any
  {
    console.log(id);
    
    //this.http.delete<Employee>(this.url + 'employees/' + id, this.httpOptions);
    return this.http.delete(this.url+'employees/'+id);
    
  }
  addEmployee(employee:Employee): any {
    var body = JSON.stringify(employee);
    console.log(body);
    return this.http.post<Employee>(this.url+'employees', body,this.httpOptions);
     
    
  }  
  getEmployeeById(id:number): any {
    return this.http.get<Employee>(this.url + 'employees/' + id);
    
  }

  

  updateEmployee(id:number, employee:Employee): any{
    var body = JSON.stringify(employee);
    console.log(body)
    return this.http.put<Employee>(this.url + 'employees/' + id, body, this.httpOptions)
    
  }

  

}
