import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar, MatDialogRef } from '@angular/material';
import { FirebaseAuthService } from 'src/app/servicios/firebase-auth.service';
import { timer } from 'rxjs';
import { Router } from '@angular/router';
import { SnackBarTemplateComponent } from '../snack-bar-template/snack-bar-template.component';

@Component({
  selector: 'app-registracion-dialog',
  templateUrl: './registracion-dialog.component.html',
  styleUrls: ['./registracion-dialog.component.css']
})
export class RegistracionDialogComponent implements OnInit {

  public processing = false;
  public success = false;
  public toggle = false;
  public type = 'password';
  public form: FormGroup;
  get email() { return this.form.get('email'); }
  get pass() { return this.form.get('contraseña'); }
  constructor(private snackBar: MatSnackBar, private authService: FirebaseAuthService, private router: Router,
              private dialogRef: MatDialogRef<RegistracionDialogComponent>) { }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      contraseña: new FormControl('', Validators.required)
    });
  }

  showPass() {
    this.toggle = !this.toggle;
    if (this.toggle) {
      this.type = 'text';
    } else {
      this.type = 'password';
    }
  }

  register() {
    this.processing = true;
    this.authService.registerEmailUser(this.email.value, this.pass.value).
      then(() => {
        timer(1000).subscribe(() => {
          this.processing = false;
          this.success = true;
          timer(1500).subscribe(() => {
            this.dialogRef.close();
            this.router.navigate(['/Login']);
          });
        });
      }, (err) => {
        this.snackBar.openFromComponent(SnackBarTemplateComponent, {
          data: {
            error: err,
            action: 'Cerrar'
          }
        });
      });
  }
}
