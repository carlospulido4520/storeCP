import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/models/products';
import { CategoriesService } from 'src/app/services/categories.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.scss']
})
export class ListCategoriesComponent implements OnInit {

  categories: Category[] = [];
  loadingTable = true;

  constructor(
    private categoryService: CategoriesService, 
    private router : Router,
    private activatedRoute: ActivatedRoute,
    private toast : ToastService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.categoryService.gerCategories().snapshotChanges().subscribe(
      response => {
        this.categories = response.map(element => {
          let dataFireBase = element.payload.toJSON();
          dataFireBase['id'] = element.key;
          return dataFireBase as Category
        })
        this.loadingTable = false;
      }
    )
  }

  editCategory(category: Category) {
    const id = category.id;
    this.categoryService.selectedCategory = category;
    this.router.navigate(['../form'], { relativeTo: this.activatedRoute, queryParams: { id } });
  }

  confirmDelete(id: string) {
    this.toast.confirmToastDelete().then(
      (result) => {
        if(result.value){
          this.deleteCategory(id);
      }
    });
  }

  deleteCategory(id: string) {
    this.categoryService.deleteCategory(id);
    this.toast.deleteToastSuccess();
  }

}
