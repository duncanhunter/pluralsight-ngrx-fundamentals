import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Product } from './product.model';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private productsAPIUrl = 'api/products';

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Product[]>(this.productsAPIUrl);
  }

  getById(id: number) {
    return this.http.get<Product>(`${this.productsAPIUrl}/${id}`);
  }

  update(product: Product): Observable<Product> {
    return this.http
      .put<Product>(this.productsAPIUrl, product)
      .pipe(catchError(this.handleError));
  }

  add({ name, price }: Product): Observable<Product> {
    return this.http
      .post<Product>(this.productsAPIUrl, { name, price })
      .pipe(catchError(this.handleError));
  }

  delete(id: number): Observable<unknown> {
    const url = `${this.productsAPIUrl}/${id}`;
    return this.http.delete(url).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }
}
