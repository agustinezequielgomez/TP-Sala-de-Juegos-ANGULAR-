import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { RegistracionDialogComponent } from '../registracion-dialog/registracion-dialog.component';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(private router: Router, private dialog: MatDialog) { }

  ngOnInit() {
  }

  decline() {
    this.router.navigate(['']);
  }

  accept() {
    const DIALOG_CONFIG = new MatDialogConfig();
    DIALOG_CONFIG.height = '45%';
    DIALOG_CONFIG.width = '60%';
    this.dialog.open(RegistracionDialogComponent, DIALOG_CONFIG);
  }

}
