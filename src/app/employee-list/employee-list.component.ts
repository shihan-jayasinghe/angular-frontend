import { Component } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {

  employees: Employee[]=[];
  constructor(){}
  ngOnInit():void{
   this.employees= [
      {
          "id": 1,
          "firstName": "amal",
          "lastName": "kamal",
          "emailID": "amal@gmail.com"
      },
      {
          "id": 2,
          "firstName": "bamal",
          "lastName": "kabal",
          "emailID": "bamal@gmail.com"
      }
  ]
  }

}
