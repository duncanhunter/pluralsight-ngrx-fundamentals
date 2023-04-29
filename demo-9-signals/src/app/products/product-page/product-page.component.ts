import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from '../product.model';
import { ProductsPageActions } from '../state/products.actions';
import {
  selectProductById,
  selectProductsErrorMessage,
  selectProductsLoading,
} from '../state/products.selectors';
import { ProductEditComponent } from '../product-edit/product-edit.component';
import { NgIf, AsyncPipe } from '@angular/common';

@Component({
    selector: 'app-product-page',
    templateUrl: './product-page.component.html',
    styleUrls: ['./product-page.component.css'],
    standalone: true,
    imports: [
        NgIf,
        ProductEditComponent,
        AsyncPipe,
    ],
})
export class ProductPageComponent {
  product$ = this.store.select(selectProductById);
  loading$ = this.store.select(selectProductsLoading);
  errorMessage$ = this.store.select(selectProductsErrorMessage);

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
