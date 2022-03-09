import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/models/app.product.model';

@Component({
  selector: 'app-productform-component',
  templateUrl: './app.productform.view.html',
})
export class ProductFormComponent {
  formProduct: FormGroup;
  product: Product;
  products: Array<Product>;
  categories: Array<string>;
  manufacturers: Array<string>;
  columnHeaders: any;

  constructor() {
    this.categories = ['Food', 'Electrical', 'Electronics'];
    this.manufacturers = ['Apple', 'Maggie', 'Bajaj'];
    this.product = new Product(0, '', '', '', '', '', 0);
    this.columnHeaders = Object.keys(this.product);
    this.products = new Array<Product>();
    this.formProduct = new FormGroup({
      ProductRowId: new FormControl(
        this.product.ProductRowId === 0 ? '' : this.product.ProductRowId,
        Validators.compose([
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(8),
          Validators.pattern('[0-9]+'),
        ])
      ),
      ProductId: new FormControl(
        this.product.ProductId,
        Validators.compose([
          Validators.required,
          Validators.pattern('[A-Za-z0-9-_]+'),
        ])
      ),
      ProductName: new FormControl(
        this.product.ProductName,
        Validators.compose([
          Validators.required,
          Validators.pattern('[A-Za-z]+'),
        ])
      ),
      Description: new FormControl(this.product.Description),
      CategoryName: new FormControl(this.product.CategoryName),
      BasePrice: new FormControl(
        this.product.BasePrice === 0 ? '' : this.product.BasePrice
      ),
      Manufacturer: new FormControl(this.product.Manufacturer),
    });
  }

  ngOnInit() {}

  save(): void {
    this.product = this.formProduct.value;
    this.products.push(this.product);
  }
}
