import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesService } from 'src/app/services/categories.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-form-categories',
  templateUrl: './form-categories.component.html',
  styleUrls: ['./form-categories.component.scss']
})
export class FormCategoriesComponent implements OnInit {

  formCategory: FormGroup;
  idCategory: string;

  constructor(
    fb: FormBuilder,
    private categoryService: CategoriesService,
    private toastService: ToastService,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) {
    this.formCategory = fb.group({
      id: [''],
      code: ['', Validators.required],
      name: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.activateRoute.queryParams.subscribe(params => {
      ({ id: this.idCategory } = params);
      if (this.idCategory) {
        !this.categoryService.selectedCategory && this.goBack();
        this.fillForm();
      }
    })
  }

  goBack() {
    this.router.navigateByUrl('/home/categories/listCategories');
  }

  fillForm() {
    const valueForm = this.categoryService.selectedCategory
    this.formCategory.patchValue({
      code: valueForm.code,
      name: valueForm.name,
      id: valueForm.id
    })
  }

  send(idCategory: string) {
    const valueForm = { ...this.formCategory.value };

    if (idCategory) {
      this.categoryService.updateCategory(valueForm);
      const text = 'Categoría editada exitosamente'
      this.toastService.toasSuccess(text);
    } else {
      this.categoryService.inserCategory(valueForm);
      const text = 'Categoría creada exitosamente'
      this.toastService.toasSuccess(text);
    }
    this.goBack();

  }

}
