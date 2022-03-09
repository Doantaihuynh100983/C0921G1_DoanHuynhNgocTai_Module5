import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../../services/customer.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {
    id : number;
    customer :FormGroup;
  constructor(private customerService : CustomerService ,
              private activatedRoute: ActivatedRoute,
              private router : Router,
              private  toast : ToastrService) {}



  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      const customer = this.getCustomerById(this.id);
      this.customer = new FormGroup({
        id: new FormControl(customer.id),
        name: new FormControl(customer.name),
        birthday: new FormControl(customer.dayOfBirth),
        gender : new FormControl(customer.gender),
        phone:new FormControl(customer.phone),
        email : new FormControl(customer.email),
        address : new FormControl(customer.adress),
        type : new FormControl(customer.type)
      });
    });

  }



  getCustomerById(id : number){
    return this.customerService.findById(id);
  }
  updateCustomer(id : number){

      const customer = this.customer.value;
      this.customerService.updateCustomer(id , customer);
    this.toast.success( this.customer.value.name, "Đã Sửa Thành Công" ,
      {
      timeOut : 1000 ,
        progressBar : true
    })

        this.router.navigateByUrl('/customer');
  }
}
