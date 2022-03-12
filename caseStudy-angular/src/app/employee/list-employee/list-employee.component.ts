import { Component, OnInit } from '@angular/core';
import {Employee} from '../../models/employee';
import {EmployeeService} from '../../services/employee.service';
import {MatDialog} from '@angular/material/dialog';
import {DeleteEmployeeComponent} from '../delete-employee/delete-employee.component';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {
    employeeList = new  Array<Employee>();

  constructor(private employeeService : EmployeeService,
              private  dialog: MatDialog) { }

  ngOnInit(): void {
    this.dialog.afterAllClosed.subscribe(()=>{
      this.employeeService.getAllEmployee().subscribe(value => {
        this.employeeList = value;
      })
    })

  }


  openDialog(id): void {
    this.dialog.open(DeleteEmployeeComponent, {
      width: '400px',
      height:'600',
      data: id,
    }
    );

  }

}
