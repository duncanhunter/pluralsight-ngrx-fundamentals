import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent {
  @Input() products: Product[] = [];
  @Input() total = 0;
  @Input() showProductCode = false;
  @Output() toggleProductCode = new EventEmitter<void>();
}
