import { Injectable } from '@angular/core';
import { Product } from '../../interfaces/product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor() {}
  products: Product[] = [
    {
      id: '1',
      name: 'Producto 1',
      imgUrl: 'assets/images/products/img1.png',
      price: 100,
      quantity: 30
    },
    {
      id: '2',
      name: 'Producto 2',
      imgUrl: 'assets/images/products/img2.png',
      price: 200,
      quantity: 30
    },
    {
      id: '3',
      name: 'Producto 3',
      imgUrl: 'assets/images/products/img3.png',
      price: 300,
      quantity: 30
    },
    {
      id: '4',
      name: 'Producto 4',
      imgUrl: 'assets/images/products/img5.png',
      price: 400,
      quantity: 30
    },
    {
      id: '5',
      name: 'Producto 5',
      imgUrl: 'assets/images/products/img5.png',
      price: 500,
      quantity: 30
    },
    {
      id: '6',
      name: 'Producto 6',
      imgUrl: 'assets/images/products/img6.png',
      price: 600,
      quantity: 30
    },
    {
      id: '7',
      name: 'Producto 7',
      imgUrl: 'assets/images/products/img7.png',
      price: 700,
      quantity: 30
    },
    {
      id: '8',
      name: 'Producto 8',
      imgUrl: 'assets/images/products/img8.png',
      price: 800,
      quantity: 30
    },
  ];
  public getAllProducts() {
    return this.products;
  }

  public getProduct(id: string) {
    const product = this.products.find(p => p.id === id);

    if (product) {
      console.log(`Product with id ${id} found:`, product);
    } else {
      console.log(`Product with id ${id} not found`);
    }
  }
}
