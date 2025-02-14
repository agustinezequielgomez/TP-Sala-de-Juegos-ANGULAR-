import { Component, OnInit, Inject } from '@angular/core';
import {MAT_SNACK_BAR_DATA, MatSnackBarRef} from '@angular/material/snack-bar';

@Component({
  selector: 'app-snack-bar-template',
  templateUrl: './snack-bar-template.component.html',
  styleUrls: ['./snack-bar-template.component.css']
})
export class SnackBarTemplateComponent implements OnInit {


  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any, public snackBarRef: MatSnackBarRef<SnackBarTemplateComponent>) { }

  ngOnInit() {
  }

}
