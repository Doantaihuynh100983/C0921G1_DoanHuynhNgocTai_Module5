import { Component, OnInit } from '@angular/core';
import {Service} from '../../models/service';
import {ServiceService} from '../../services/service.service';

@Component({
  selector: 'app-list-service',
  templateUrl: './list-service.component.html',
  styleUrls: ['./list-service.component.css']
})
export class ListServiceComponent implements OnInit {
      serviceList: Service[] = [];
  constructor(private serviceService : ServiceService) { }

  ngOnInit(): void {
        this.serviceList = this.serviceService.getAllService();
  }

}
