import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employeemodel';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

 employees: Employee[] = []
//   {
//     id: 'ca01b680-4522-4610-84c3-2bb9277ae50e',
//     firstName : 'Bryan',
//     lastName: 'Makini',
//     email: 'bmakini@ymail.com',
//     phone: 254718890334,
//     salary: 200000,
//     department: 'IT'
//   },
//   {
//     id: '50a9716c-3a2e-468d-9f02-acb68458f744',
//     firstName : 'John',
//     lastName: 'Doe',
//     email: 'johndoe@ymail.com',
//     phone: 254700000001,
//     salary: 150000,
//     department: 'Sales'
//   },
//   {
//     id: 'a34aaa0d-3774-48a7-9b98-55c2fd920189',
//     firstName : 'Pinky',
//     lastName: 'Poe',
//     email: 'pinkypoe@ymail.com',
//     phone: 254700000000,
//     salary: 180000,
//     department: 'Finance'
//   }
//  ]

  constructor() { }

  ngOnInit(): void {

  }

}
