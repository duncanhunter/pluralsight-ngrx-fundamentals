import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { ProductsService } from './products.service';
import { ComponentStore } from '@ngrx/component-store';
import { exhaustMap, tap } from 'rxjs';

interface ProductsState {
  products: Product[];
}

@Injectable()
export class ProductsStore extends ComponentStore<ProductsState> {
  products$ = this.select((state) => state.products);

  constructor(private productsService: ProductsService) {
    super({ products: [] });
  }

  addProducts = this.updater((state, products: Product[]) => ({
    ...state,
    products,
  }));

  getProducts = this.effect((trigger$) =>
    trigger$.pipe(
      exhaustMap(() =>
        this.productsService.getAll().pipe(tap({ next: this.addProducts }))
      )
    )
  );
}
