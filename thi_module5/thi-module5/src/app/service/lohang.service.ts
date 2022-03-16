import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {LoHang} from '../model/LoHang';
import {SanPham} from '../model/SanPham';


const API_URL_LoHang="http://localhost:3000/loHang";
const API_URL_SanPham="http://localhost:3000/sanPham";

@Injectable({
  providedIn: 'root'
})
export class LohangService {


  constructor(private http: HttpClient) { }



  getAllLoHang() : Observable<LoHang[]>{
    return this.http.get<LoHang[]>(API_URL_LoHang);
  }
  getAllSanPham() : Observable<SanPham[]>{
    return this.http.get<SanPham[]>(API_URL_SanPham);
  }

  saveLoHang(loHang: LoHang) : Observable<LoHang>{
    return this.http.post<LoHang>(API_URL_LoHang, loHang);
  }

  findById(id: number): Observable<LoHang>{
    return this.http.get<LoHang>(API_URL_LoHang +"/"+ id);
  }

  deleteProduct(id: number): Observable<LoHang> {
    return this.http.delete<LoHang>(API_URL_LoHang +"/"+id);
  }


  search(tenSanPham: string) : Observable<LoHang[]>{
    return this.http.get<LoHang[]>(API_URL_LoHang+ "/?sanPham.tenSanPham_like="+ tenSanPham);
  }
}
