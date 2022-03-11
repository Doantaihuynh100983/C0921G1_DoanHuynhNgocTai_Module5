import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../../service/product.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Product} from "../../model/product";

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  updateProductForm: FormGroup;
  id: number;

  constructor(private productService: ProductService,
              private activatedRoute : ActivatedRoute,
              private router : Router) { }

  ngOnInit(): void {
    this.id  = Number(this.activatedRoute.snapshot.params.id);
     const product = this.getCustomerById(this.id);
    this.updateProductForm =  new FormGroup({
      id: new FormControl(product.id),
      name: new FormControl(product.name),
      price: new FormControl(product.price),
      description: new FormControl(product.description),
    });
  }



  getCustomerById(id: number) {
    return this.productService.findById(id);
  }


  submit(id : number) {
    const product = this.updateProductForm.value;
    this.productService.updateProduct(id, product);
    this.router.navigateByUrl("/product/list");
  }
}
