import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

 
  updateForm:FormGroup;
  emp:Employee;
  
  constructor(private empService:EmployeeService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.getEmployeeById(id);
    this.initilizeEmployee();
  }
  updateEmployee()
  {
    if(this.updateForm.valid)
    {
      this.emp = this.updateForm.value;
      console.log(this.emp);
      this.empService.updateEmployee(this.emp.id,this.emp).subscribe
      (
        (response)=>
        {
        console.log(response);
        alert('Employee updated  successfully!!');
        const tabindex =1;
          this.router.navigate(['/home',tabindex]);
       }
      );
    }
  }
  initilizeEmployee()
  {
   
    this.updateForm = new FormGroup({
      id:new FormControl(Validators.required),
      name:new FormControl(Validators.required),
      title:new FormControl(Validators.required),
      dept:new FormControl(Validators.required)
    });

  }

    hasError = (controlName:string,errorName:string)=>
    {
      return this.updateForm.controls[controlName].hasError(errorName);
    }
    getEmployeeById(id:number)
    {
     
        this.empService.getEmployeeById(id).subscribe
        (
          (response)=>
          {

           this.emp = response;
           console.log(this.emp);
           this.updateForm.setValue({
            id:this.emp.id,
            name:this.emp.name,
            title:this.emp.title,
            dept:this.emp.dept,
          });
          }
        );
      }
    }
  
    
  
