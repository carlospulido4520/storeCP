import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { ToastService } from './toast.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public afAuth: AngularFireAuth, private toastService: ToastService, private router: Router) { }


  async login(email: string, password: string) {
    try {
      const result = await this.afAuth.signInWithEmailAndPassword(email, password);
      this.router.navigate(['/home']);
      return result;
    }
    catch (error) {
      const text = 'Email o contraseña incorrecta';
      this.toastService.toasError(text);
    }
  }

  async register(email: string, password: string) {
    try {
      const result = await this.afAuth.createUserWithEmailAndPassword(email, password);
      const succes = 'Usuario creado correctamente';
      this.toastService.toasSuccess(succes);
      return result;
    }
    catch (error) {
      const text = 'Revise los datos';
      this.toastService.toasError(text);
    }
  }

  async logout() {
    try {
      await this.afAuth.signOut();
    }
    catch (error) {
      console.log(error);
    }
  }

  getCurrentUser() {
    return this.afAuth.authState.pipe(first()).toPromise();
  }

}
