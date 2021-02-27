import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { ListCategoriesComponent } from './components/list-categories/list-categories.component';
import { FormCategoriesComponent } from './components/form-categories/form-categories.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ListCategoriesComponent, FormCategoriesComponent],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CategoriesModule { }
