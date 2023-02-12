import { Component } from '@angular/core';
import { of } from 'rxjs';
import { ProductsStore } from '../products.store';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css'],
  providers: [ProductsStore],
})
export class ProductsPageComponent {
  products$ = this.productsStore.products$;
  total$ = this.productsStore.total$;
  showProductCode$ = of(false);
  loading$ = of(false);
  errorMessage$ = of('');

  constructor(private productsStore: ProductsStore) {}

  ngOnInit() {
    this.productsStore.getProducts();
  }

  toggleShowProductCode() {
    alert('not implemented');
  }
}
