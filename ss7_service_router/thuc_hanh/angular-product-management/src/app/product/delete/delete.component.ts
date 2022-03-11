import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../service/product.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Product} from "../../model/product";

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  product : Product
  constructor(private productService : ProductService,
              private activatedRoute : ActivatedRoute,
              private router : Router) { }

  ngOnInit(): void {

     const id  = Number(this.activatedRoute.snapshot.params.id);
    this.product = this.getCustomerById(id);


  }
  getCustomerById(id: number) {
    return this.productService.findById(id);
  }

  deleteProduct(id : number){
      this.productService.deleteProduct(id);
    this.router.navigateByUrl("/product/list");

  }
}
