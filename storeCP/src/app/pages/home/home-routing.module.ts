import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'products',
    loadChildren: () => import('./../products/products.module').then((m) => m.ProductsModule),
  },
  {
    path: 'categories',
    loadChildren: () => import('./../categories/categories.module').then((m) => m.CategoriesModule),
  },
  {
    path: 'productsAdd',
    loadChildren: () => import('./../shopping-cart/shopping-cart.module').then((m) => m.ShoppingCartModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
