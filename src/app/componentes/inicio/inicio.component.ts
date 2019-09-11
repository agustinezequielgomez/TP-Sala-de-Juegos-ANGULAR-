import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor() {
    this.animateEntrances();
   }
  public textEntrance = false;
  public buttonEntrance = false;
  ngOnInit() {
  }

  animateEntrances()
  {
    setTimeout(() =>
    {
      this.textEntrance = true;
    }, 1000);

    setTimeout(() =>
    {
      this.buttonEntrance = true;
    }, 1300);
  }
}
