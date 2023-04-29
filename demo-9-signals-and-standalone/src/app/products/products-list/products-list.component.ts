import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../product.model';
import { NgFor, NgIf, CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-products-list',
  imports: [NgFor, NgIf, CurrencyPipe, RouterLink],
  template: `
    <div class="card">
      <div class="header">
        <div>
          <h2 class="title">Products</h2>
        </div>
        <button routerLink="/products/0" class="btn btn-primary">Add</button>
      </div>
      <ul role="list">
        <li *ngFor="let product of products">
          <div>
            <div>{{ product.name }}</div>
            <div>
              {{ product.price | currency }}
              <ng-container *ngIf="showProductCode">
                Product Code: {{ product.id }}
              </ng-container>
            </div>
          </div>
          <div>
            <button [routerLink]="['/products', product.id]" class="btn">
              Edit
            </button>
          </div>
        </li>
        <li>
          Total: {{ this.total | currency }}
          <div>
            <input
              id="showProductCode"
              type="checkbox"
              (change)="toggleProductCode.emit()"
              [checked]="showProductCode"
            />
            <label for="showProductCode">Show Product Code</label>
          </div>
        </li>
      </ul>
    </div>
  `,
})
export class ProductsListComponent {
  @Input() products: Product[] | null = [];
  @Input() total: number | null = 0;
  @Input() showProductCode: boolean | null = false;
  @Output() toggleProductCode = new EventEmitter<void>();
}
