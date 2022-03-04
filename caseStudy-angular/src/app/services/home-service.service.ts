import { Injectable } from '@angular/core';
import {Home} from '../models/home';



@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {
  homeList: Home[] = [
    {
      id: 1,
      img: "https://vnn-imgs-f.vgcloud.vn/2020/10/08/15/khach-san-dat-vang-tuong-lai-u-am.jpg",
      name: "Khách sạn Nha Trang",
      price: 100.000
    },
    {
      id: 2,
      img: "https://cdn.vietnambiz.vn/2019/11/4/dd32d9b188d86d6d8dc40d1ff9a0ebf6-15728512315071030248829.jpg",
      name: "Marriott Emerald Bay",
      price: 400.000
    },
    {
      id: 3,
      img: "https://vietluat.vn/wp-content/uploads/2020/02/thanh-lap-cong-ty-nganh-khach-san.jpg",
      name: "Amiana Resort Nha Trang",
      price: 500.000
    },
    {
      id: 4,
      img: "https://www.quangbinhtravel.vn/wp-content/uploads/2021/07/khach-san-sam-quang-binh-3-scaled.jpg",
      name: "Khách Sạn Super Candle",
      price: 600.000
    },
    {
      id: 5,
      img: "https://dulichkhampha24.com/wp-content/uploads/2020/06/khach-san-duong-vo-van-kiet-da-nang.jpeg",
      name: "Khách sạn Senna Huế",
      price: 100.000
    },
    {
      id: 6,
      img: "https://kenhhomestay.com/wp-content/uploads/2018/06/khach-san-sai-gon-15.jpg",
      name: "Sheraton Grand Danang",
      price: 300.000
    },
    {
      id: 7,
      img: "https://fvgtravel.com.vn/uploads/images/dlg-khach-san-4-san-da-nang-12.jpg",
      name: "Serena Resort",
      price: 200.000
    },
    {
      id: 8,
      img: "https://kenhhomestay.com/wp-content/uploads/2021/02/khach-san-tinh-yeu-ha-noi-10.jpg",
      name: "Serena Resort",
      price: 200.000
    },
  ]


  constructor() { }

  getAllHotel() {
      return  this.homeList;
  }

}
