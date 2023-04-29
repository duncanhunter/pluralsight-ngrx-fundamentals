import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ProductsPageActions } from '../state/products.actions';
import {
  selectProducts,
  selectProductsErrorMessage,
  selectProductsLoading,
  selectProductsShowProductCode,
  selectProductsTotal,
} from '../state/products.selectors';
import { ProductsListComponent } from '../products-list/products-list.component';
import { NgIf } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-products-page',
  imports: [NgIf, ProductsListComponent],
  template: `
    <div class="card error-card" *ngIf="errorMessage() !== ''">
      Error: {{ errorMessage() }}
    </div>
    <div *ngIf="!loading(); else loadingElement">
      <div class="container">
        <app-products-list
          [total]="total()"
          [products]="products()"
          [showProductCode]="showProductCode()"
          (toggleProductCode)="toggleShowProductCode()"
        ></app-products-list>
      </div>
    </div>
    <ng-template #loadingElement>Loading...</ng-template>
  `,
})
export class ProductsPageComponent {
  products = this.store.selectSignal(selectProducts);
  total = this.store.selectSignal(selectProductsTotal);
  showProductCode = this.store.selectSignal(selectProductsShowProductCode);
  loading = this.store.selectSignal(selectProductsLoading);
  errorMessage = this.store.selectSignal(selectProductsErrorMessage);

  constructor(private store: Store) {}

  toggleShowProductCode() {
    this.store.dispatch(ProductsPageActions.toggleShowProductCode());
  }
}
