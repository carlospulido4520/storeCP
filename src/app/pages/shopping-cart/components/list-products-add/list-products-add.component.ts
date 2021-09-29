import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/products';
import { ProductService } from 'src/app/services/product.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-list-products-add',
  templateUrl: './list-products-add.component.html',
  styleUrls: ['./list-products-add.component.scss']
})
export class ListProductsAddComponent implements OnInit {

  products : Product[] = [];
  total : number = 0;

  constructor(
    private productService: ProductService,
    private toast: ToastService
  ) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.productService.gerProductsAdd().snapshotChanges().subscribe(
      response => {
        this.total= 0;
        this.products = response.map(element => {
          let dataFireBase: any = element.payload.toJSON();
          dataFireBase['id'] = element.key;
          this.total += Number (dataFireBase.value);
          return dataFireBase as Product;
        })
        this.productService.quantity$.emit(this.products.length);
      }
    )
  }

  confirmDelete(id: string) {
    this.toast.confirmToastDelete().then(
      (result) => {
        if(result.value){
          this.deleteProductAdd(id);
      }
    });
  }

  deleteProductAdd(id : string){
    this.productService.deleteProductsAdd(id);
    this.toast.deleteToastSuccess();
  }

}
