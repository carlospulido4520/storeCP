import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Category } from '../models/products'

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  categories: AngularFireList<any>;
  selectedCategory: Category;

  constructor(private fireBase: AngularFireDatabase) { }


  gerCategories() {
    return this.categories = this.fireBase.list('categories')
  }

  inserCategory(category: Category) {
    this.categories.push({
      name: category.name,
      code: category.code
    });
  }

  updateCategory(category: Category) {
    this.categories.update(category.id, {
      name: category.name,
      code: category.code
    })
  }

  deleteCategory(id: string) {
    this.categories.remove(id);
  }


}
