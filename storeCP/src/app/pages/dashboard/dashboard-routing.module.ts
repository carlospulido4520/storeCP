import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AdminGuard  } from '../../admin/admin.guard';
import { WelcomeComponent } from './components/welcome/welcome.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: WelcomeComponent,
      },
      {
        path: 'category',
        canActivate: [AdminGuard],
        loadChildren: () =>
          import('../categories/categories.module').then((m) => m.CategoriesModule),
      },
      {
        path: 'product',
        canActivate: [AdminGuard],
        loadChildren: () =>
          import('../products/products.module').then((m) => m.ProductsModule),
      },
      {
        path: 'cart',
        canActivate: [AdminGuard],
        loadChildren: () =>
          import('../shopping-cart/shopping-cart.module').then((m) => m.ShoppingCartModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
