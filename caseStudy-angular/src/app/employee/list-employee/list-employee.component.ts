import {Component, OnInit} from '@angular/core';
import {Employee} from '../../models/employee';
import {EmployeeService} from '../../services/employee.service';
import {MatDialog} from '@angular/material/dialog';
import {DeleteEmployeeComponent} from '../delete-employee/delete-employee.component';
import {position} from '../../models/position';
import {Education} from '../../models/Education';
import {Division} from '../../models/Division';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {
  employeeList = new Array<Employee>();
  positionList: position[] = [];
  educationList: Education[] = [];
  divisionList: Division[] = [];


  name: string ='';
  address: string = '';
  division: string = '';
  position: string = '';
  education: string = '';

  constructor(private employeeService: EmployeeService,
              private  dialog: MatDialog,
              private activatedRoute: ActivatedRoute ) {
  }



  ngOnInit(): void {
    this.employeeService.getAllPosition().subscribe(value => {
      this.positionList = value;
      this.employeeService.getAllEducation().subscribe(value => {
        this.educationList = value;
        this.employeeService.getAllDivision().subscribe(value => {
          this.divisionList = value;
                  this.getSearch();
        });
      });

    });

  }


  openDialog(id): void {
    this.dialog.open(DeleteEmployeeComponent, {
        width: '400px',
        height: '600',
        data: id,
      }
    );

  }

  getSearch() {
    this.dialog.afterAllClosed.subscribe(() => {
      this.employeeService.searchEmployee(this.name,this.address,this.position,this.education ,this.division).subscribe(value => {
        this.employeeList = value;
        console.log(this.employeeList);
      });

    });
  }
}
