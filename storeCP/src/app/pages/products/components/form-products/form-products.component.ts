import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/models/products';
import { CategoriesService } from 'src/app/services/categories.service';
import { ProductService } from 'src/app/services/product.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-form-products',
  templateUrl: './form-products.component.html',
  styleUrls: ['./form-products.component.scss']
})
export class FormProductsComponent implements OnInit {

  formProduct: FormGroup;
  idProduct: string;
  categories: Category[] = [];

  constructor(
    fb: FormBuilder,
    private productService: ProductService,
    private toastService: ToastService,
    private router: Router,
    private activateRoute: ActivatedRoute,
    private categoryService : CategoriesService) {

    this.formProduct = fb.group({
      id: [''],
      code: ['', Validators.required],
      name: ['', Validators.required],
      value: ['', Validators.required],
      category: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.getCategories();
    this.activateRoute.queryParams.subscribe(params => {
      ({ id: this.idProduct } = params);
      if (this.idProduct) {
        !this.productService.selectedProduct && this.goBack();
        this.fillForm();
      }
    })
    
  }

  getCategories() {
    this.categoryService.gerCategories().snapshotChanges().subscribe(
      response => {
        this.categories = response.map(element => {
          let dataFireBase = element.payload.toJSON();
          dataFireBase['id'] = element.key;
          return dataFireBase as Category
        })
      }
    )
  }

  goBack() {
    this.router.navigateByUrl('/home/products/listProducts');
  }

  fillForm() {
    const valueForm = { ...this.productService.selectedProduct }
    this.formProduct.patchValue({
      id: valueForm.id,
      code: valueForm.code,
      name: valueForm.name,
      value: valueForm.value,
      category: valueForm.category,
    })
  }

  send(idCategory) {
    const valueForm = { ...this.formProduct.value };

    if (idCategory) {
      this.productService.updateProduc(valueForm);
      const text = 'Producto editado exitosamente'
      this.toastService.toasSuccess(text);
    } else {
      this.productService.inserProduct(valueForm);
      const text = 'Producto creado exitosamente'
      this.toastService.toasSuccess(text);
    }
    this.goBack();

  }

}
