import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {

  user$ : Observable<any> =  this.authService.afAuth.user;
  numberOfProducts : number = 0;
  qantitySuscription : Subscription;

  constructor(
    private authService : AuthService, 
    public router : Router, 
    private productService : ProductService,
    ) { }

  ngOnInit() {
    this.qantitySuscription = this.productService.quantity$.subscribe(
      (qantity)=> {
        this.numberOfProducts = qantity;
      }
    )
  }

  async logout() {
    await this.authService.logout();
    await this.router.navigate(['login']);
    localStorage.removeItem('user');
    await this.productService.productsInCar.remove();
  }

  ngOnDestroy(): void {
    this.qantitySuscription.unsubscribe();
    
  }

}
