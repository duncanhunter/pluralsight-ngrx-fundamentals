import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from '../product.model';
import { ProductsService } from '../products.service';
import {
  ProductsAPIActions,
  ProductsPageActions,
} from '../state/products.actions';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css'],
})
export class ProductsPageComponent {
  products: Product[] = [];
  total = 0;
  loading = true;
  showProductCode$ = this.store.select(
    (state: any) => state.products.showProductCode
  );

  constructor(private productsService: ProductsService, private store: Store) {}

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.store.dispatch(ProductsPageActions.loadProducts());
    this.productsService.getAll().subscribe((products) => {
      this.store.dispatch(
        ProductsAPIActions.productsLoadedSuccess({ products })
      );
    });
  }

  toggleShowProductCode() {
    this.store.dispatch(ProductsPageActions.toggleShowProductCode());
  }
}
