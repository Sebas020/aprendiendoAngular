import { Injectable } from '@angular/core';
import { Pelicula } from '../models/pelicula';

@Injectable()
export class PeliculaService{
    public peliculas: Array<Pelicula>;

    constructor(){
        this.peliculas = [
            new Pelicula("Spiderman 4", 'https://i.ytimg.com/vi/qSQTdrMSmSY/maxresdefault.jpg', 2019),
            new Pelicula("Los vengadores EndGame", 'https://as.com/tikitakas/imagenes/2019/04/26/portada/1556258369_131914_1556258703_noticia_normal.jpg', 2015),
            new Pelicula("Batman vs Superman", 'https://img.europapress.es/fotoweb/fotonoticia_20160322233405_1280.jpg', 2021)
          ];
    }

    holaMundo(){
        return 'Hola mundo desde un servicio de angular';
    }

    getPeliculas(){
        return this.peliculas;
    }
}