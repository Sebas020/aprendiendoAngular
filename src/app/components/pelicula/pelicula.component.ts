import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pelicula } from 'src/app/models/pelicula';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {
  @Input() pelicula: Pelicula;
  //Pasarle objeto al componente padre a travez del output
  @Output() MarcarFavorita = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
//Este evento se llama en la vista hija, y se le pasa por parámetro lo que se quiere mandar al 
//componente padre llamando al evento antes creado(MarcarFavorita)
  seleccionar(event, pelicula){
    this.MarcarFavorita.emit({
      pelicula: pelicula
    });
  }

}
