import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormProductsComponent } from './components/form-products/form-products.component';
import { ListProductsComponent } from './components/list-products/list-products.component';


const routes: Routes = [
  { path: 'listProducts', component: ListProductsComponent },
  { path: 'form', component: FormProductsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
