import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import {DeleteComponent} from '../delete/delete.component';





export function comparePassword( c : AbstractControl) : any{
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


  constructor(private  fb : FormBuilder,
    public matDialog: MatDialog
) { }

  openDialog(): void {
    const dialogRef = this.matDialog.open(DeleteComponent, {
      width: '250px'

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  infoForm = this.fb.group({
    "email": ['',[Validators.required,Validators.email]],
      "pwGroup" : this.fb.group({
        "password" : ['',[Validators.minLength(6),Validators.required]],
        "confirmPassword" : '',
      },{validator : comparePassword}),

    "country" : ['',[Validators.required]],
    "age":  ['',[Validators.required , this.checkAge18]] ,
    "gender" : ['',[Validators.required]],
    "phone" : ['',[Validators.required , Validators.pattern(/^\+84\d{9,10}$/)]]

  })



  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.infoForm.value);

  }


  checkAge18(abstractControl : AbstractControl) : any{
    const AgeStr =  Number( abstractControl.value.substr(0,4));
    const ageFullYear = new Date().getFullYear();
    return (AgeStr - ageFullYear) >=18 ? null : {not18 : true}
  }
}


