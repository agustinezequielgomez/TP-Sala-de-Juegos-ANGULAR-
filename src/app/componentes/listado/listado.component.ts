import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  public listado: [{usuario: string, fecha: Date, puntuacion: string}];
  constructor() {
    this.listado = JSON.parse(localStorage.getItem('hi-lo-score'));
  }

  ngOnInit() {

  }
}
