import { Route } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsService } from './products/products.service';
import { productsFeature } from './products/state/products.reducer';
import { ProductEffects } from './products/state/products.effects';
import { provideState } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';

export const routes: Route[] = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'products',
    loadChildren: () =>
      import('./products/products.routes').then((mod) => mod.routes),
    providers: [
      ProductsService,
      provideState(productsFeature),
      provideEffects(ProductEffects),
    ],
  },
];
