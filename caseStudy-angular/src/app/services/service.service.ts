import { Injectable } from '@angular/core';
import {Service} from '../models/service';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
    serviceList: Service[] = [
      {
        id : 1,
        name:"Villa 1",
        area: 12,
        cost: 21,
        maxPeople: 2,
        standandRoom: "Vip",
        descriptionOtherConvenience: "Nomal",
        poolArea: 2,
        numberOfFloors: 2,
        serviceType:"Villa",
        rentType:"Giờ"
      },
      {
        id : 2,
        name:"Room 1",
        area: 12,
        cost: 21,
        maxPeople: 2,
        standandRoom: "Vip",
        descriptionOtherConvenience: "Nomal",
        poolArea: 2,
        numberOfFloors: 2,
        serviceType:"Room",
        rentType:"Ngày"
      },
      {
        id : 3,
        name:"House 1",
        area: 12,
        cost: 21,
        maxPeople: 2,
        standandRoom: "Vip",
        descriptionOtherConvenience: "Nomal",
        poolArea: 2,
        numberOfFloors: 2,
        serviceType:"House",
        rentType:"Giờ"
      },
    ];

  constructor() { }

  getAllService(){
    return this.serviceList;
  }
}
