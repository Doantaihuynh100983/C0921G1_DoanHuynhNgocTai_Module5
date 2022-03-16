import { Component, OnInit } from '@angular/core';
import {LohangService} from '../service/lohang.service';
import {LoHang} from '../model/LoHang';
import {MatDialog} from '@angular/material/dialog';
import {DeleteLohangComponent} from '../delete-lohang/delete-lohang.component';

@Component({
  selector: 'app-list-lohang',
  templateUrl: './list-lohang.component.html',
  styleUrls: ['./list-lohang.component.css']
})
export class ListLohangComponent implements OnInit {
      loHangList: LoHang[]= [];
  p : number=1;
  tenSanPham:  string = '';
  // ngayHetHan: string='';

  constructor(private lohangService: LohangService,
              private  dialog: MatDialog) { }

  ngOnInit(): void {

    // this.lohangService.getAllLoHang().subscribe(value => {
    //   this.loHangList = value;
    // })
      this.timKiem();


  }
  openDialog(id): void {
    this.dialog.open(DeleteLohangComponent, {
        width: '400px',
        height: '600',
        data: id,
      }
    );
  }
  clear() {
    this.tenSanPham = '';

    this.timKiem();
  }


  timKiem() {
    this.dialog.afterAllClosed.subscribe(() => {
      this.lohangService.search(this.tenSanPham).subscribe(value => {
        this.loHangList = value;
        this.p = 0;
        console.log(this.tenSanPham);
      })
    })
  }
}
