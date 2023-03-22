import { Component, OnInit } from '@angular/core';

import { ProductsService } from './../../../services/products/products.service';
import { Product } from './../../../interfaces/product.interface'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor( private productsService: ProductsService) { }

  products: Product[] ;

  ngOnInit(): void {
  this.products = this.productsService.getAllProducts();
  }

}
