import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  selectedIndex:0
  displayedColumns: string[] = ['Id', 'Name', 'Title', 'Department','delete'];
  dataSource = ELEMENT_DATA;
  employees:Employee[] = [];
  constructor(private empService:EmployeeService,private router:Router) { }

  ngOnInit() :void {
    this.getEmployees();
  }
  getEmployees()
  {
    this.empService.getEmployees().subscribe
    (
      (response)=>
      {
        this.employees = response;
      }
    )
  }
  delete(id:number)
  {
   this.empService.deleteEmployee(id).subscribe
   (
     (response)=>
     {
     console.log(response);
    }
   )
  this.getEmployees();
  }
  add()
  {
    this.router.navigate(['add']);
  }

  update(id:number)
  {
    this.router.navigate(['details',id]);
  }
  

}
