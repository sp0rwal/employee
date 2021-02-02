import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { EmployeeComponent } from '../employee/employee.component';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  employeeForm:FormGroup;
  emp:Employee;
  constructor(private empService:EmployeeService,private router:Router) { }

  ngOnInit() {
    this.initilizeEmployee();
  }

  initilizeEmployee()
  {
    this.employeeForm = new FormGroup({
      id:new FormControl('',Validators.required),
      name:new FormControl('',Validators.required),
      title:new FormControl('',Validators.required),
      dept:new FormControl('',Validators.required)
    })
  }

    hasError = (controlName:string,errorName:string)=>
    {
      return this.employeeForm.controls[controlName].hasError(errorName);
    }
    addEmployee()
    {
      if(this.employeeForm.valid)
      {
        this.emp = this.employeeForm.value;
        console.log(this.emp);
        this.empService.addEmployee(this.emp).subscribe
        (
          (response)=>
          {
          console.log(response);
          alert('Employee added  successfully!!');
          const tabindex =1;
          this.router.navigate(['/home',tabindex]);
         }
        );
      }
     
    }
    
  

}
