import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class FirebaseAuthService {

  constructor(private afsAuth: AngularFireAuth) { }

  loginEmailUser(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.afsAuth.auth.signInWithEmailAndPassword(email, password).
        then(userData => resolve(userData),
          err => reject(err));
    });
  }

  logOut() {
    return this.afsAuth.auth.signOut();
  }

  registerEmailUser(email: string, passowrd: string) {
    return new Promise((resolve, reject) => {
      this.afsAuth.auth.createUserWithEmailAndPassword(email, passowrd).
          then(userData => resolve(userData),
          err => reject(err));
    });
  }
}
