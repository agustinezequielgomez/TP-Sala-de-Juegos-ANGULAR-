import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import {Subscription} from "rxjs";
import {TimerObservable} from "rxjs/observable/TimerObservable";
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { FirebaseAuthService } from '../../servicios/firebase-auth.service';
import { MatSnackBar } from '@angular/material';
import { SnackBarTemplateComponent } from '../snack-bar-template/snack-bar-template.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // Manejo de form controls
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  claveFormControl = new FormControl('',
  [
    Validators.required
  ]);

  public usuario: string;
  public clave: string;
  public showPass: boolean;
  public type = 'text';
  public logingIn = false;

  constructor(private authService: FirebaseAuthService, private route: Router, private snackBar: MatSnackBar) {
    this.usuario = 'admin@admin.com';
    this.clave = 'admin11';
    this.showPass = false;
  }

  ngOnInit() {
  }

  login()
  {
    this.logingIn = true;
    this.authService.loginEmailUser(this.usuario, this.clave)
                    .then(() => {
                      setTimeout(() => {
                        this.route.navigate(['/Principal']);
                      }, 1500);
                    }, (err) => {
                      setTimeout(() => {
                        this.logingIn = false;
                        this.snackBar.openFromComponent(SnackBarTemplateComponent, {
                          data: {
                            error: this.validateLogin(err.code),
                            action: 'Cerrar'
                          }
                        });
                      }, 1500);
                    });
  }



  validateLogin(errCode): string
  {
    switch (errCode)
    {
      case 'auth/invalid-email':
        return 'El mail ingresado no es valido';
      case 'auth/user-not-found':
        return 'El mail ingresado no corresponde a ningun usuario';
      case 'auth/wrong-password':
        return 'Contraseña incorrecta';
    }
  }
}
