import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListCustomerComponent} from './list-customer/list-customer.component';
import {UpdateCustomerComponent} from './update-customer/update-customer.component';
import {AddCustomerComponent} from './add-customer/add-customer.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ToastrModule} from 'ngx-toastr';

const customerRoutes:Routes=[
  {
    path : "" , component: ListCustomerComponent
  },
  {
    path : "addCustomer" , component: AddCustomerComponent
  },
  {
    path : "updateCustomer/:id" , component: UpdateCustomerComponent
  },
];
@NgModule({
  declarations: [
    ListCustomerComponent,
    UpdateCustomerComponent,
    AddCustomerComponent

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(customerRoutes),
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot()

  ]
})
export class CustomerModule { }
