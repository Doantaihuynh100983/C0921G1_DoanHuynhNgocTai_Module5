import {Component, Inject, OnInit} from '@angular/core';
import {LohangService} from '../service/lohang.service';
import {ActivatedRoute} from '@angular/router';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {LoHang} from '../model/LoHang';
import Swal from "sweetalert2";

@Component({
  selector: 'app-delete-lohang',
  templateUrl: './delete-lohang.component.html',
  styleUrls: ['./delete-lohang.component.css']
})
export class DeleteLohangComponent implements OnInit {
  id: number;
  loHang: LoHang;
  constructor(private activatedRoute : ActivatedRoute ,
              @Inject(MAT_DIALOG_DATA) public data: any,
              public dialog: MatDialogRef<DeleteLohangComponent>,
              private lohangService: LohangService) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params.id;
    this.lohangService.findById(this.data).subscribe(value => {
      this.loHang = value;
    })
  }

  onNoClick(): void {
    this.dialog.close();
  }

  deleteLohang() {
      this.lohangService.deleteProduct(this.data).subscribe(()=>{
        this.dialog.close();
        Swal.fire(
          'Xóa Thành Công!',
          this.loHang.maLoHang,
          'success'
        );
      })
  }
}
