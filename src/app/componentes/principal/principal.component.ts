import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.less']
})
export class PrincipalComponent implements OnInit {
 public status: any = {
    isFirstOpen: true,
    isFirstDisabled: false
  };

  public content: any[] = [{link: '/Juegos', img: './assets/imagenes/saladejuegos.png', heading: 'Juegos', content: `El método lúdico es un
   conjunto de estrategias diseñadas para crear un ambiente de armonía en los estudiantes que están inmersos en el proceso de
    aprendizaje. Este método busca que los alumnos se apropien de los temas impartidos por los docentes utilizando el juego.` },
    {link: '/Listado', img: './assets/imagenes/listado.png', heading: 'Listados de resultados', content: `Los listados de los resultados 
    con ordenamiento y busqueda`},
    {link: '/Configuracion', img: './assets/imagenes/Configuracion.png', heading: 'Configuración',
    content: `Ajustes de la aplicacion y los métodos de autentificación`},
    {link: '/Jugadores', img: './assets/imagenes/jugadores.png', heading: 'Jugadores',
    content: `Listado de jugadores`}];

  constructor() {  }

  ngOnInit() {
  }

 

}
