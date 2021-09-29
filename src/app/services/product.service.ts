import { EventEmitter, Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Product } from '../models/products'


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: AngularFireList<any>;
  selectedProduct: Product;
  productsInCar: AngularFireList<any>;
  quantity$ = new EventEmitter<number>();


  constructor(private fireBase: AngularFireDatabase) { }

  gerProducts() {
    return this.products = this.fireBase.list('products')
  }

  gerProductsAdd() {
    return this.productsInCar = this.fireBase.list('productsAdd')
  }

  addProductToCar(product: Product) {
    this.productsInCar.push({
      name: product.name,
      code: product.code,
      value: product.value,
      category: product.category
    })
  }

  inserProduct(product: Product) {
    this.products.push({
      name: product.name,
      code: product.code,
      value: product.value,
      category: product.category
    })
  }

  updateProduc(product: Product) {
    this.products.update(product.id, {
      name: product.name,
      code: product.code,
      value: product.value,
      category: product.category
    })
  }

  deleteProduct(id: string) {
    this.products.remove(id);
  }

  deleteProductsAdd( id : string) {
    this.productsInCar.remove(id);
  }
}
