import { Component, OnInit } from '@angular/core';
import {Employee} from '../../models/employee';
import {EmployeeService} from '../../services/employee.service';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {
    employeeList = new  Array<Employee>();

  constructor(private employeeService : EmployeeService) { }

  ngOnInit(): void {
    this.employeeList = this.employeeService.getAllEmployee();

  }

}
