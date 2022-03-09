import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {CustomerService} from '../../services/customer.service';
import {Route, Router, Routes} from '@angular/router';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  customerForm: FormGroup = new FormGroup({
    id: new FormControl(),
    dayOfBirth: new FormControl(),
    name: new FormControl(),
    gender: new FormControl(),
    phone: new FormControl(),
    email: new FormControl(),
    adress: new FormControl(),
    type: new FormControl()

  });

  constructor(private  customerService: CustomerService,
              private route: Router) {
  }

  ngOnInit(): void {
  }

  submit() {
    const customer = this.customerForm.value;
    this.customerService.saveCustomer(customer);
    this.route.navigateByUrl('/customer');
  }

}
