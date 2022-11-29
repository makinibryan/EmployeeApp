import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employeemodel';
import { EmployeesService } from '../services/employees.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

 employees: Employee[] = []


  constructor(private employeeService: EmployeesService ) { }

  ngOnInit(): void {
    this.employeeService.getAllEmployees()
    .subscribe({
      next: (employees) =>{
        this.employees = employees;
      },
      error:(response) =>{
        console.log(response);
      }
    });
  }

}
