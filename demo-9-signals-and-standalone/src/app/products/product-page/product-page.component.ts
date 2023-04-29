import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from '../product.model';
import { ProductsPageActions } from '../state/products.actions';
import {
  selectProductById,
  selectProductsLoading,
} from '../state/products.selectors';
import { ProductEditComponent } from '../product-edit/product-edit.component';
import { NgIf, AsyncPipe } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-product-page',
  imports: [NgIf, ProductEditComponent, AsyncPipe],
  template: `
    <div *ngIf="!loading(); else loadingElement">
      <app-product-edit
        (add)="addProduct($event)"
        (update)="updateProduct($event)"
        (delete)="deleteProduct($event)"
        [product]="product()"
      ></app-product-edit>
    </div>

    <ng-template #loadingElement>Loading...</ng-template>
  `,
})
export class ProductPageComponent {
  product = this.store.selectSignal(selectProductById);
  loading = this.store.selectSignal(selectProductsLoading);

  constructor(private store: Store) {}

  addProduct(product: Product) {
    this.store.dispatch(ProductsPageActions.addProduct({ product }));
  }

  updateProduct(product: Product) {
    this.store.dispatch(ProductsPageActions.updateProduct({ product }));
  }

  deleteProduct(id: number) {
    this.store.dispatch(ProductsPageActions.deleteProduct({ id }));
  }
}
