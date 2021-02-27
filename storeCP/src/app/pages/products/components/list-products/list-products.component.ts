import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/products';
import { ProductService } from 'src/app/services/product.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent implements OnInit {

  products : Product[] = [];

  constructor(
    private productServide: ProductService, 
    private router : Router,
    private activatedRoute: ActivatedRoute,
    private toast : ToastService
  ) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productServide.gerCategories().snapshotChanges().subscribe(
      response => {
        this.products = response.map(element => {
          let dataFireBase = element.payload.toJSON();
          dataFireBase['id'] = element.key;
          return dataFireBase as Product
        })
      }
    )
  }

  confirmDelete(id: string) {
    this.toast.confirmToastDelete().then(
      (result) => {
        if(result.value){
          this.deleteCategory(id);
      }
    });
  }

  editProduct(product : Product){
    const id = product.id;
    this.productServide.selectedProduct = product;
    this.router.navigate(['../form'], { relativeTo: this.activatedRoute, queryParams: { id } });
  }

  deleteCategory(id: string) {
    this.productServide.deleteProduct(id);
    this.toast.deleteToastSuccess();
  }

}
