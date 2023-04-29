import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Product } from './products/product.model';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const products: Product[] = [
      { id: 1, price: 3, name: 'Hammer' },
      { id: 2, price: 2, name: 'Nails' },
      { id: 3, price: 4, name: 'Spanner' },
    ];
    return { products };
  }
}
