import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { SecurityContext } from '@angular/compiler/src/core';


@Component({
  selector: 'app-menu-card',
  templateUrl: './menu-card.component.html',
  styleUrls: ['./menu-card.component.less']
})
export class MenuCardComponent implements OnInit {

  public cardContent: any[] = [{link: this.sanitizer.bypassSecurityTrustStyle(`url('/assets/imagenes/cerebro.jpg')`),
  title: 'Velocidad y agilidad aritmética', description:'Juego de agilidad mental'},
{link: this.sanitizer.bypassSecurityTrustStyle(`url('/assets/imagenes/ppt.jpg')`),
 title: 'Piedra Papel o Tijera', description: 'Juega contra la máquina'},
{link: this.sanitizer.bypassSecurityTrustStyle(`url('/assets/imagenes/adivina.png')`),
title: 'Adivina el número secreto', description: 'Juega de estrategia'}];


constructor(private route: ActivatedRoute, private router: Router, private sanitizer: DomSanitizer) 
{
}

sanitizeStlye(url)
{
  return this.sanitizer.bypassSecurityTrustStyle(`{bakcground-image:url(${url})};`);
}

  ngOnInit() {
  }
  Juego(tipo: string) {
    switch (tipo) {
      case 'Adivina':
          this.router.navigate(['/Juegos/Adivina']);
        break;
      case 'Agilidad':
          this.router.navigate(['/Juegos/Agilidad']);
        break;
      case 'AdivinaMasListado':
          this.router.navigate(['/Juegos/AdivinaMasListado']);
        break;
      case 'AgilidadaMasListado':
          this.router.navigate(['/Juegos/AgilidadaMasListado']);
        break;
    }
  }
}
