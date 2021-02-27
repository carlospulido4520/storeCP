import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormCategoriesComponent } from './components/form-categories/form-categories.component';
import { ListCategoriesComponent } from './components/list-categories/list-categories.component';


const routes: Routes = [
  { path: 'listCategories', component: ListCategoriesComponent },
  { path: 'form', component: FormCategoriesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
