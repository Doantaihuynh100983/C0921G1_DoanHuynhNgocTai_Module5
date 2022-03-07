import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee.component';
import {RouterModule, Routes} from '@angular/router';
import {ListEmployeeComponent} from './list-employee/list-employee.component';
import {AddEmployeeComponent} from './add-employee/add-employee.component';
import {UpdateEmployeeComponent} from './update-employee/update-employee.component';



const employeeRouter:Routes=[
  {
    path : '', component: ListEmployeeComponent
  },
  {
    path : 'addEmployee', component: AddEmployeeComponent
  },
  {
    path : 'updateEmployee', component: UpdateEmployeeComponent
  },
]

@NgModule({
  declarations: [
    EmployeeComponent,
    ListEmployeeComponent,
    AddEmployeeComponent,
    UpdateEmployeeComponent

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(employeeRouter)
  ]
})
export class EmployeeModule { }
