import { Component, OnInit } from '@angular/core';
import {ProductService} from '../service/product.service';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
      addForm : FormGroup = new FormGroup({
          id: new FormControl(''),
        name: new FormControl(''),
        price: new FormControl(''),
      })
  constructor(private productService : ProductService,
              private router : Router) { }

  ngOnInit(): void {

  }

  addNew() {
    const product = this.addForm.value;
    this.productService.saveCategory(product).subscribe(()=>{
          this.router.navigateByUrl("")
    });
  }
}
