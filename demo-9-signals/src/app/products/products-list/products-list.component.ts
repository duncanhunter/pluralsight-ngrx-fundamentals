import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../product.model';
import { NgFor, NgIf, CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-products-list',
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.css'],
    standalone: true,
    imports: [
        RouterLink,
        NgFor,
        NgIf,
        CurrencyPipe,
    ],
})
export class ProductsListComponent {
  @Input() products: Product[] | null = [];
  @Input() total: number | null = 0;
  @Input() showProductCode: boolean | null = false;
  @Output() toggleProductCode = new EventEmitter<void>();
}
