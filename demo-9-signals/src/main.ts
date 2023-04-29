// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { provideEffects } from '@ngrx/effects';
// import { environment } from 'src/environments/environment';
// import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { routerReducer } from '@ngrx/router-store';
import { provideStore } from '@ngrx/store';
import { InMemoryDataService } from './app/in-memory-data.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import {
  withInterceptorsFromDi,
  provideHttpClient,
} from '@angular/common/http';
// import { AppRoutingModule } from './app/app-routing.module';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { Route, provideRouter } from '@angular/router';
import { HomeComponent } from './app/home/home.component';

const routes: Route[] = [
  {
    path: '',
    component: HomeComponent,
  },
  // {
  //   path: 'products',
  //   loadChildren: () =>
  //     import('./app/products/products.module').then((m) => m.ProductsModule),
  // },
  // {path: 'admin', loadComponent: () => import('./admin/panel.component').then(mod => mod.AdminPanelComponent)},
];

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    provideRouter(routes),
    provideStore({
      router: routerReducer,
    }),
    provideEffects(),
    // BrowserModule,
    importProvidersFrom(
      HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService),
      // StoreModule.forRoot({ router: routerReducer }),
      // StoreDevtoolsModule.instrument({
      //   maxAge: 25,
      //   logOnly: environment.production,
      // }),
      // EffectsModule.forRoot([]),
      // StoreRouterConnectingModule.forRoot()
    ),
  ],
}).catch((err) => console.error(err));
