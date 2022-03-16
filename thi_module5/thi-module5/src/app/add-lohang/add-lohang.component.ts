import { Component, OnInit } from '@angular/core';
import {LohangService} from '../service/lohang.service';
import {SanPham} from '../model/SanPham';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-lohang',
  templateUrl: './add-lohang.component.html',
  styleUrls: ['./add-lohang.component.css']
})
export class AddLohangComponent implements OnInit {
  sanPhamList: SanPham[]=[];
  flagValid = false;
  loHangForm= new FormGroup({
    id:new FormControl(''),
    maLoHang:new FormControl('',[Validators.required , Validators.pattern("^LH-[0-9]{4}$")]),
    soLuong:new FormControl('',[Validators.required,this.checkSoLuong]),
    ngayNhapHang:new FormControl('',[Validators.required]),
    ngaySanXuat:new FormControl('',[Validators.required]),
    ngayHetHan:new FormControl('',[Validators.required]),
    sanPham:new FormControl('',[Validators.required]),
  })


  constructor(private lohangService: LohangService,
              private router : Router) { }
  ngOnInit(): void {
    this.getAllSanPham();
  }




  getAllSanPham(){
    this.lohangService.getAllSanPham().subscribe(value => {
      this.sanPhamList = value;
      console.log(this.sanPhamList);

    })
  }

  themMoiLoHang() {
    if (this.loHangForm.invalid) {
      this.flagValid = true;
    }
    else {
      const loHang = this.loHangForm.value;
      this.lohangService.saveLoHang(loHang).subscribe(()=>{
        Swal.fire(
          'Thêm Mới Thành Công!',
          this.loHangForm.value.name,
          'success'
        );
        this.router.navigateByUrl('');
      })
    }

  }


  checkSoLuong(control: AbstractControl): any {
    const soLuong = Number(control.value);
    return soLuong > 0 ? null : {soLuong: true};
  }
}
