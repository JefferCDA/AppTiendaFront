import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './components/products.component';

import { MatCardModule } from '@angular/material/card';

import  {
  ProductComponent
}from './../../components/';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MatCardModule,]
})
export class ProductsModule {}
