import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListProductsAddComponent } from './components/list-products-add/list-products-add.component';


const routes: Routes = [{ path: 'listProductsAdd', component: ListProductsAddComponent },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShoppingCartRoutingModule { }
