import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsPageComponent } from './products-page/products-page.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductPageComponent } from './product-page/product-page.component';

@NgModule({
  declarations: [
    ProductsPageComponent,
    ProductsListComponent,
    ProductEditComponent,
    ProductPageComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    ReactiveFormsModule
  ]
})
export class ProductsModule { }
