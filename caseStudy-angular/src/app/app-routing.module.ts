import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ListCustomerComponent} from './customer/list-customer/list-customer.component';
import {AddCustomerComponent} from './customer/add-customer/add-customer.component';
import {UpdateCustomerComponent} from './customer/update-customer/update-customer.component';
import {ListEmployeeComponent} from './employee/list-employee/list-employee.component';
import {AddEmployeeComponent} from './employee/add-employee/add-employee.component';
import {UpdateEmployeeComponent} from './employee/update-employee/update-employee.component';
import {ListContractComponent} from './contract/list-contract/list-contract.component';
import {AddContractComponent} from './contract/add-contract/add-contract.component';
import {UpdateContractComponent} from './contract/update-contract/update-contract.component';
import {ListServiceComponent} from './service/list-service/list-service.component';
import {AddServiceComponent} from './service/add-service/add-service.component';
import {UpdateServiceComponent} from './service/update-service/update-service.component';


const routes: Routes = [
  { path : 'home', component: HomeComponent},
  {path : '', component: HomeComponent},


  //Khách Hàng
  {path : 'customerList', component: ListCustomerComponent},
  {path : 'addCustomer' , component: AddCustomerComponent},
  {path : 'updateCustomer' , component: UpdateCustomerComponent},



  //Nhân Viên
  {path : 'listEmployee' , component: ListEmployeeComponent},
  {path : 'addEmployee' , component: AddEmployeeComponent},
  {path : 'updateEmployee' , component: UpdateEmployeeComponent},



  //Hợp Đồng
  {path : 'listContract' , component: ListContractComponent},
  {path : 'addContract' , component: AddContractComponent},
  {path : 'updateContract' , component: UpdateContractComponent},



  //Dịch Vụ
  {path : 'listService' , component: ListServiceComponent},
  {path : 'addService' , component: AddServiceComponent},
  {path : 'updateService' , component: UpdateServiceComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
