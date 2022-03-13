import {Component, OnInit} from '@angular/core';
import {Service} from '../../models/service';
import {ServiceService} from '../../services/service.service';
import {RentType} from '../../models/RentType';
import {ServiceType} from '../../models/ServiceType';

@Component({
  selector: 'app-list-service',
  templateUrl: './list-service.component.html',
  styleUrls: ['./list-service.component.css']
})
export class ListServiceComponent implements OnInit {
  serviceList: Service[] = [];
  rentTypeList: RentType[] = [];
  serviceTypeList: ServiceType[] = [];

  constructor(private serviceService: ServiceService) {
  }

  ngOnInit(): void {
    this.serviceService.getAllRentType().subscribe(value => {
      this.rentTypeList = value;
      this.serviceService.getAllServiceType().subscribe(value => {
        this.serviceTypeList = value;
              this.searchService();
      });
    });
  }


//   this.serviceService.getAllService().subscribe(value => {
//   this.serviceList = value;
//   console.log(this.serviceList);
// })
  name: string = '';
  rentType: string = '';
  serviceType: string='';

  searchService() {
      this.serviceService.searchAllService(this.name,this.rentType,this.serviceType).subscribe(value => {
        this.serviceList = value;
      })
  }
}
