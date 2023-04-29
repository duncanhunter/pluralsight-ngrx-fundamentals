import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { provideEffects } from '@ngrx/effects';
import { routerReducer, provideRouterStore } from '@ngrx/router-store';
import { provideStore } from '@ngrx/store';
import { InMemoryDataService } from './app/in-memory-data.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import {
  withInterceptorsFromDi,
  provideHttpClient,
} from '@angular/common/http';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { environment } from './environments/environment.development';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    provideStore({
      router: routerReducer,
    }),
    provideRouterStore(),
    provideRouter(routes),
    provideEffects(),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: environment.production,
    }),
    importProvidersFrom(
      HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService)
    ),
  ],
}).catch((err) => console.error(err));
