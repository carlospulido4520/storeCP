import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingCartRoutingModule } from './shopping-cart-routing.module';
import { ListProductsAddComponent } from './components/list-products-add/list-products-add.component';


@NgModule({
  declarations: [ListProductsAddComponent],
  imports: [
    CommonModule,
    ShoppingCartRoutingModule
  ]
})
export class ShoppingCartModule { }
