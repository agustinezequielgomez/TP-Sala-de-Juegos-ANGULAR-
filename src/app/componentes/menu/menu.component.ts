import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public dropDownExpanded = false;
  public content: {tabName: string, link: string}[] = [
    {tabName: 'Mis datos', link: 'QuienSoy'},
    {tabName: 'Salir', link: 'Login'}
  ];
  public games: {tabName: string, link: string}[] = [
    {tabName: 'Adivina', link: 'Juegos/Adivina'},
    {tabName: 'Agilidad', link: 'Juegos/Agilidad'},
    {tabName: 'Adivina+Listado', link: 'Juegos/AdivinaMasListado'},
    {tabName: 'Agilidad+Listado', link: 'Juegos/AgilidadMasListado'},
    {tabName: 'HiLo', link: 'Juegos/HiLo'}
  ];
  constructor(private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
  }

  // Juego(tipo: string) {
  //   switch (tipo) {
  //     case 'Adivina':
  //         this.router.navigate(['/Juegos/Adivina']);
  //       break;
  //     case 'Agilidad':
  //         this.router.navigate(['/Juegos/Agilidad']);
  //       break;
  //     case 'AdivinaMasListado':
  //         this.router.navigate(['/Juegos/AdivinaMasListado']);
  //       break;
  //     case 'AgilidadaMasListado':
  //         this.router.navigate(['/Juegos/AgilidadaMasListado']);
  //       break;
  //   }
  // }

}
