import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, Validators} from '@angular/forms';







export function comparePassword( c : AbstractControl) {
  const v = c.value;
  return (v.password === v.confirmPassword) ?
    null : {
      passWordNotMatch: true
    } ;
}



@Component({
  selector: 'app-form-dang-ky',
  templateUrl: './form-dang-ky.component.html',
  styleUrls: ['./form-dang-ky.component.css']
})
export class FormDangKyComponent implements OnInit {


  constructor(private  fb : FormBuilder) { }

  infoForm = this.fb.group({
    "email": ['',[Validators.required,Validators.email]],
      "pwGroup" : this.fb.group({
        "password" : ['',[Validators.minLength(6),Validators.required]],
        "confirmPassword" : '',
      },{validator : comparePassword}),

    "country" : ['',[Validators.required]],
    "age":'12',
    "gender" : ['',[Validators.required]],
    "phone" : ['',[Validators.required , Validators.pattern(/^\+84\d{9,10}$/)]]

  })



  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.infoForm.value);

  }



}


