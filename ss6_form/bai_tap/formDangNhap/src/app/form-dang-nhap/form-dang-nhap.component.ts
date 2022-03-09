import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-form-dang-nhap',
  templateUrl: './form-dang-nhap.component.html',
  styleUrls: ['./form-dang-nhap.component.css']
})
export class FormDangNhapComponent implements OnInit {



  constructor(private  fb : FormBuilder) { }

  infoForm =  this.fb.group({
    "email" : ['',[Validators.required, Validators.email]],
    "password" :['',[
          Validators.required,
          Validators.minLength(6)
    ]]
  })
  ngOnInit(): void {

  }

}
