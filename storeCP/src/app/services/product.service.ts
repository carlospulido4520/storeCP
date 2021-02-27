import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Product } from '../models/products'


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: AngularFireList<any>;
  selectedProduct: Product;


  constructor(private fireBase: AngularFireDatabase) { }

  gerCategories() {
    return this.products = this.fireBase.list('products')
  }

  inserProduct(product: Product) {
    this.products.push( {
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
}
