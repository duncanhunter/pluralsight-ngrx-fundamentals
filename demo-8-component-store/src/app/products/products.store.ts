import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { exhaustMap, tap } from 'rxjs';
import { sumProducts } from '../utils/sum-products';
import { Product } from './product.model';
import { ProductsService } from './products.service';

export interface ProductsState {
  total: number;
  products: Product[];
}

@Injectable()
export class ProductsStore extends ComponentStore<ProductsState> {
  products$ = this.select((state) => state.products);
  total$ = this.select((state) => sumProducts(state.products));

  constructor(private productsService: ProductsService) {
    super({ products: [], total: 0 });
  }

  addProducts = this.updater((state, products: Product[]) => ({
    ...state,
    products,
  }));

  getProducts = this.effect<void>((trigger$) =>
    trigger$.pipe(
      exhaustMap(() =>
        this.productsService.getAll().pipe(
          tap({
            next: (products) => this.addProducts(products),
            error: (error) => console.error(error),
          })
        )
      )
    )
  );
}
