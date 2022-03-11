import {Component, OnInit} from '@angular/core';
import {EmployeeService} from '../../services/employee.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Employee} from '../../models/employee';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  employeeForm: FormGroup = new FormGroup({
    id: new FormControl('',Validators.required),
    name: new FormControl('',[Validators.required,Validators.pattern(/^[a-z A-Z]{1,50}$/)]),
    birthday: new FormControl('',[Validators.required]),
    idCard: new FormControl(''),
    salary: new FormControl(''),
    phone: new FormControl('',[Validators.required , Validators.pattern( /^(84+|0)(90|91)[0-9]{7}$/)]),
    email: new FormControl("",[Validators.required,Validators.email]),
    adress: new FormControl("",Validators.required),
    education: new FormControl("",Validators.required),
    position: new FormControl("",Validators.required),
    division: new FormControl("",Validators.required)
  });
  employee: Employee;

  constructor(private employeeService: EmployeeService,
              private router: Router) {
  }

  ngOnInit(): void {

  }

  addEmployee() {
    this.employee = this.employeeForm.value;
    this.employeeService.addEmployee(this.employee);
    Swal.fire(
      'Thêm Mới Thành Công!',
      this.employeeForm.value.name,
      'success'
    );
    this.router.navigateByUrl('/employee');
  }


}
