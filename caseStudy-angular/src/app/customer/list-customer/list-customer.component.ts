import { Component, OnInit } from '@angular/core';
import {Customer} from '../../models/customer';
import {CustomerService} from '../../services/customer.service';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {
    customerList : Customer[] = [];
  constructor(private customerService : CustomerService) { }

  ngOnInit(): void {
      this.customerList = this.customerService.getAllCustomer();
  }



}
