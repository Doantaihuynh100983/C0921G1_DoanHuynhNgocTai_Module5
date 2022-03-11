import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ListEmployeeComponent} from './list-employee/list-employee.component';
import {AddEmployeeComponent} from './add-employee/add-employee.component';
import {UpdateEmployeeComponent} from './update-employee/update-employee.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ToastrModule} from 'ngx-toastr';



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
    ListEmployeeComponent,
    AddEmployeeComponent,
    UpdateEmployeeComponent

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(employeeRouter),
    ReactiveFormsModule,
    ToastrModule.forRoot(),
  ]
})
export class EmployeeModule { }
