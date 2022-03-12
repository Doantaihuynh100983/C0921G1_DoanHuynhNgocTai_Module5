import {Component, OnInit} from '@angular/core';
import {EmployeeService} from '../../services/employee.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Employee} from '../../models/employee';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';
import {position} from '../../models/position';
import {Education} from '../../models/Education';
import {Division} from '../../models/Division';


@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  employeeForm: FormGroup = new FormGroup({
    id: new FormControl('',Validators.required),
    name: new FormControl('',[Validators.required,Validators.pattern(/^[a-z A-Z]{1,50}$/)]),
    birthDay: new FormControl('',[Validators.required]),
    idCard: new FormControl(''),
    salary: new FormControl(''),
    phone: new FormControl('',[Validators.required , Validators.pattern( /^(84+|0)(90|91)[0-9]{7}$/)]),
    email: new FormControl("",[Validators.required,Validators.email]),
    address: new FormControl("",Validators.required),
    education: new FormControl("",Validators.required),
    position: new FormControl("",Validators.required),
    division: new FormControl("",Validators.required),
    flagDeleteCustomer : new FormControl("1")
  });


  employee: Employee;
  positionList: position[] = [];
  educationList: Education[] = [];
  divisionList: Division[] = [];

  constructor(private employeeService: EmployeeService,
              private router: Router) {
  }

  ngOnInit(): void {
        this.getAllPosition();
        this.getAllEducation();
        this.getAllDivision();
  }


  getAllPosition(){
    this.employeeService.getAllPosition().subscribe(value => {
        this.positionList = value;
    })
  }

  getAllEducation(){
    this.employeeService.getAllEducation().subscribe(value => {
      this.educationList = value;
    })
  }

  getAllDivision(){
    this.employeeService.getAllDivision().subscribe(value => {
      this.divisionList = value;
    })
  }


  addEmployee() {
    this.employee = this.employeeForm.value;
    console.log(this.employee);

    this.employeeService.saveEmployee(this.employee).subscribe(()=>{
      console.log(this.employee);
      Swal.fire(
        'Thêm Mới Thành Công!',
        this.employeeForm.value.name,
        'success'
      );
      this.router.navigateByUrl('/employee');
    });

  }


}
