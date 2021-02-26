import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'; 

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( public afAuth : AngularFireAuth) { }


  async login( email : string, pasword : string) {
    const result = await this.afAuth.signInWithEmailAndPassword(email, pasword);
    return result
  }

  async register( email : string, pasword : string) {
    const result = await this.afAuth.createUserWithEmailAndPassword(email, pasword);
    return result
  }

  async logout() {
    await this.afAuth.signOut();
  }

}
