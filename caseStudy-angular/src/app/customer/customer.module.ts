import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer.component';
import {ListCustomerComponent} from './list-customer/list-customer.component';
import {UpdateCustomerComponent} from './update-customer/update-customer.component';
import {AddCustomerComponent} from './add-customer/add-customer.component';
import {RouterModule, Routes} from '@angular/router';

const customerRoutes:Routes=[
  {
    path : "" , component: ListCustomerComponent
  },
  {
    path : "addCustomer" , component: AddCustomerComponent
  },
  {
    path : "updateCustomer" , component: UpdateCustomerComponent
  },
];
@NgModule({
  declarations: [
    CustomerComponent,
    ListCustomerComponent,
    UpdateCustomerComponent,
    AddCustomerComponent

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(customerRoutes)

  ]
})
export class CustomerModule { }
