import { Component } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent {

  employee:Employee=new Employee();
  constructor(private emploeeService: EmployeeService,
    private router:Router){}

  ngOnInit():void{}

  saveEmployee()
  {
    this.emploeeService.createEmployee(this.employee).subscribe(data =>{
      console.log(data);
    },
    error => console.log(this.employee)
    );
  }

  gotoEmployeeList()
  {
    this.router.navigate(["/employees"]);
  }

  onSubmit(){
    console.log(this.employee);
    this.saveEmployee();
  }
}
