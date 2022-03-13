import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Product} from '../model/Product';
import {ProductService} from '../service/product.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id: number;

  updateForm:FormGroup
  constructor(private productService : ProductService,
              private activatedRoute: ActivatedRoute,
              private router : Router) { }

  ngOnInit(): void {
      this.id = this.activatedRoute.snapshot.params.id;
      this.productService.findById(this.id ).subscribe(product=>{
      this.updateForm =  new FormGroup({
        id: new FormControl(product.id),
        name: new FormControl(product.name),
        price: new FormControl(product.price),
      })
    })

  }

  update(id : number) {
    const product = this.updateForm.value;
    this.productService.updateCategory(id, product).subscribe(() => {
      alert('Cập nhật thành công');
      this.router.navigateByUrl("/")
    }, e => {
      console.log(e);
    });
  }
}
