import { Injectable } from '@angular/core';
import {Employee} from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
      employeeList : Employee[] = [
        {
          id : 1,
         name: "Minh Chiến" ,
          birthday: "2000-12-12",
          idCard: 123456789,
          salary : 12334,
          phone : 89898988,
          email: "MinhChien@gmail.com",
          adress: "Quảng Lào",
          education:"Trung cấp",
          division: "Lễ tân",
          position: "Sale – Marketing"
        },
        {
          id : 2,
          name: "Tú Trinh" ,
          birthday: "2000-09-02",
          idCard: 123456789,
          salary : 12334,
          phone : 89898988,
          email: "TuTrinh@gmail.com",
          adress: "Quảng Nam",
          education:"Trung cấp",
          division: "Lễ tân",
          position: "Sale – Marketing"
        },
        {
          id : 3,
          name: "Tường Vi" ,
          birthday: "1999-12-12",
          idCard: 123456789,
          salary : 12334,
          phone : 89898988,
          email: "TuongVi@gmail.com",
          adress: "lào Cai",
          education:"Trung cấp",
          division: "Lễ tân",
          position: "Sale – Marketing"
        },
        {
          id : 4,
          name: "Mạnh Hùng" ,
          birthday: "1998-11-11",
          idCard: 123456789,
          salary : 12334,
          phone : 89898988,
          email: "MinhChien@gmail.com",
          adress: "Huế",
          education:"Trung cấp",
          division: "Lễ tân",
          position: "Sale – Marketing"
        },
        {
          id : 5,
          name: "Đức Mạnh" ,
          birthday: "1777-5-7",
          idCard: 123456789,
          salary : 12334,
          phone : 89898988,
          email: "MinhChien@gmail.com",
          adress: "Ấn Độ",
          education:"Trung cấp",
          division: "Lễ tân",
          position: "Sale – Marketing"
        },
        {
          id : 6,
          name: "Văn Công" ,
          birthday: "1996-09-89",
          idCard: 123456789,
          salary : 12334,
          phone : 89898988,
          email: "MinhChien@gmail.com",
          adress: "Bắc Cạn",
          education:"Trung cấp",
          division: "Lễ tân",
          position: "Sale – Marketing"
        },
        {
          id : 7,
          name: "Lì Cu Te" ,
          birthday: "2000-5-7",
          idCard: 123456789,
          salary : 12334,
          phone : 89898988,
          email: "MinhChien@gmail.com",
          adress: "Hà Nội",
          education:"Trung cấp",
          division: "Lễ tân",
          position: "Sale – Marketing"
        },
        {
          id : 8,
          name: "Thái Bình" ,
          birthday: "2000-12-07",
          idCard: 123456789,
          salary : 12334,
          phone : 89898988,
          email: "MinhChien@gmail.com",
          adress: "Quảng Nam",
          education:"Trung cấp",
          division: "Lễ tân",
          position: "Sale – Marketing"
        },

      ];

  constructor() { }

  getAllEmployee(){
    return this.employeeList;
  }


  addEmployee(employee){
      this.employeeList.push(employee);
  }
}
