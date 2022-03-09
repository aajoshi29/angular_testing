import { TestBed, ComponentFixture, async } from '@angular/core/testing';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Product } from '../models/app.product.model';
import { ProductFormComponent } from './../components/productformcomponent/app.productform.component';

describe('Product Component Test', () => {
  let component: ProductFormComponent;
  let fixture: ComponentFixture<ProductFormComponent>;
  let form: HTMLElement;
  let prd = new Product(100, 'Prod-01', 'Apple', 'Food', 'Apple', 'desc', 100);

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductFormComponent],
      imports: [FormsModule, ReactiveFormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('check if a new row is added to the table', () => {
    component.formProduct.setValue({
      ProductRowId: prd.ProductRowId,
      ProductId: prd.ProductId,
      ProductName: prd.ProductName,
      Description: prd.Description,
      Manufacturer: prd.Manufacturer,
      CategoryName: prd.CategoryName,
      BasePrice: prd.BasePrice,
    });
    const nativeElement = fixture.nativeElement;
    let originalRowsLength = nativeElement.querySelectorAll('tr').length;
    form = nativeElement.querySelector('form');
    form.dispatchEvent(new Event('submit'));
    fixture.detectChanges();

    let finalRowsLength = nativeElement.querySelectorAll('tr').length;
    expect(finalRowsLength).toBe(originalRowsLength + 1);
  });

  it('check if product is added to products array', () => {
    component.formProduct.setValue({
      ProductRowId: prd.ProductRowId,
      ProductId: prd.ProductId,
      ProductName: prd.ProductName,
      Description: prd.Description,
      Manufacturer: prd.Manufacturer,
      CategoryName: prd.CategoryName,
      BasePrice: prd.BasePrice,
    });
    const nativeElement = fixture.nativeElement;
    let originalProductsArrayLength = component.products.length;
    form = nativeElement.querySelector('form');
    form.dispatchEvent(new Event('submit'));
    fixture.detectChanges();
    expect(component.products.length).toBe(originalProductsArrayLength + 1);
  });
});
