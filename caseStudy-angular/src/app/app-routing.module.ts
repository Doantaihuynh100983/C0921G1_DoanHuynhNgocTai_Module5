import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ListCustomerComponent} from './customer/list-customer/list-customer.component';
import {AddCustomerComponent} from './customer/add-customer/add-customer.component';
import {UpdateCustomerComponent} from './customer/update-customer/update-customer.component';
import {ListEmployeeComponent} from './employee/list-employee/list-employee.component';
import {AddEmployeeComponent} from './employee/add-employee/add-employee.component';
import {UpdateEmployeeComponent} from './employee/update-employee/update-employee.component';


const routes: Routes = [
  { path : 'home', component: HomeComponent},
  {path : '', component: HomeComponent},
  {path : 'customerList', component: ListCustomerComponent},
  {path : 'addCustomer' , component: AddCustomerComponent},
  {path : 'updateCustomer' , component: UpdateCustomerComponent},
  {path : 'listEmployee' , component: ListEmployeeComponent},
  {path : 'addEmployee' , component: AddEmployeeComponent},
  {path : 'updateEmployee' , component: UpdateEmployeeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
