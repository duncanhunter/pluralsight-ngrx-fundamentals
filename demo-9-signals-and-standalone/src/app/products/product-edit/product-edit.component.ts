import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { Product } from '../product.model';
import { RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-product-edit',
  imports: [ReactiveFormsModule, NgIf, RouterLink],
  template: `
    <div class="card">
      <h2 class="title">Product Detail</h2>
      <form [formGroup]="productForm" (submit)="onSubmit()">
        <div class="form-field">
          <div>
            <label for="name">Name:</label>
            <input type="text" name="name" id="name" formControlName="name" />
          </div>
          <span
            class="invalid"
            *ngIf="
              productForm.get('name')?.touched &&
              productForm.get('name')?.hasError('required')
            "
            >Name is required.</span
          >
        </div>
        <div class="form-field">
          <div>
            <label for="price">Price:</label>
            <input
              min="0"
              type="number"
              name="price"
              id="price"
              formControlName="price"
            />
          </div>
          <span
            class="invalid"
            *ngIf="
              productForm.get('price')?.touched &&
              productForm.get('price')?.hasError('min')
            "
            >Price must be 0 or greater.</span
          >
        </div>
        <div class="actions">
          <button type="submit" class="btn btn-primary">Save</button>
          <button
            type="button"
            *ngIf="oldProduct && oldProduct.id > 0"
            class="btn"
            (click)="delete.emit(oldProduct.id)"
          >
            Delete
          </button>
          <button routerLink="/products" type="button" class="btn">
            Cancel
          </button>
        </div>
      </form>
    </div>
  `,
})
export class ProductEditComponent {
  oldProduct: Product | null | undefined = null;
  @Output() add = new EventEmitter<Product>();
  @Output() update = new EventEmitter<Product>();
  @Output() delete = new EventEmitter<number>();
  @Input() set product(product: Product | null | undefined) {
    this.productForm.reset({ name: '', price: 0 });
    if (product && product.id !== 0) {
      this.productForm.setValue({
        name: product.name,
        price: product.price,
      });
    }
    this.oldProduct = product;
  }

  productForm = new FormGroup({
    name: new FormControl('', Validators.required),
    price: new FormControl(0, Validators.min(0)),
  });

  onSubmit() {
    this.productForm.markAllAsTouched();

    if (this.productForm.invalid) return;

    const product = {
      id: this.oldProduct?.id ?? 0,
      name: this.productForm.value.name ?? '',
      price: this.productForm.value.price ?? 0,
    };

    this.oldProduct ? this.update.emit(product) : this.add.emit(product);
  }
}
