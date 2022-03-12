import {Component, OnInit} from '@angular/core';
import {EmployeeService} from '../../services/employee.service';
import {Employee} from '../../models/employee';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Division} from '../../models/Division';
import {Education} from '../../models/Education';
import {position} from '../../models/position';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  id: number;
  employee: Employee;
  employeeForm = this.fb.group({
    id: [''],
    name: [''],
    birthDay: [''],
    idCard: [''],
    salary: [''],
    phone: [''],
    email: [''],
    address: [''],
    division: [''],
    education: [''],
    position: [''],
    flagDeleteCustomer:['1']
  });
  positionList: position[] = [];
  educationList: Education[] = [];
  divisionList: Division[] = [];


  constructor(private employeeService: EmployeeService,
              private activatedRoute: ActivatedRoute,
              private fb: FormBuilder,
              private router : Router) {
  }

  ngOnInit(): void {
    this.employeeService.getAllPosition().subscribe(value => {
      this.positionList = value;

      this.employeeService.getAllEducation().subscribe(value => {
        this.educationList = value;

        this.employeeService.getAllDivision().subscribe(value => {
          this.divisionList = value;

          this.id = this.activatedRoute.snapshot.params.id;
          return this.employeeService.findById(this.id).subscribe(employee => {
            this.employeeForm.setValue(employee);
          });

        });
      });

    });
  }


  updateEmployee(id: number) {
        this.employee = this.employeeForm.value;
        this.employeeService.updateEmployee(id ,  this.employee).subscribe(()=>{
          Swal.fire(
            'Sửa Thành Công!',
            this.employeeForm.value.name,
            'success'
          );
          this.router.navigateByUrl('/employee');
        });
  }
}
