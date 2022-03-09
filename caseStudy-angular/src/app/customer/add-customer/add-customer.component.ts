import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {CustomerService} from '../../services/customer.service';
import {Route, Router, Routes} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

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
              private route: Router ,
              private  toast : ToastrService) {
  }

  ngOnInit(): void {
  }

  submit() {
    const customer = this.customerForm.value;
    this.customerService.saveCustomer(customer);
    this.toast.success( this.customerForm.value.name, "Đã Thêm Mới Thành Công" ,
      {
        timeOut : 1000 ,
        progressBar : true
      })

    this.route.navigateByUrl('/customer');
  }

}
