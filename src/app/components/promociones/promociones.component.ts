import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promociones',
  templateUrl: './promociones.component.html',
  styleUrls: ['./promociones.component.css']
})
export class PromocionesComponent implements OnInit {
  ubicaciones: any = [
    {
      Lugar: 'Sinaloa'
    },
    {
      Lugar: 'Sonora'
    },
    {
      Lugar: 'Durango'
    },
    {
      Lugar: 'Jalisco'
    },
    {
      Lugar: 'San luis potosí'
    },
  ];
  cultivos = [
    {
      nombre: 'Maíz'
    },
    {
      nombre: 'Tomate'
    },
    {
      nombre: 'Aguacate'
    },
    {
      nombre: 'Arroz'
    },
    {
      nombre: 'Papa'
    },
  ];
  estaciones = [
    {
      nombre: 'Primavera'
    },
    {
      nombre: 'Verano'
    },
    {
      nombre: 'Otoño'
    },
    {
      nombre: 'Invierno'
    },
  ];
  elementos = [
    {
      imagen: '/',
      titulo: 'Primer elemento',
      precio: 500,
      preciodesc: 400,
      ubicacion: 'Sinaloa',
      descripcion: 'Esto es un ejemplo de una descripción y es algo larga por lo que va a ser necesario un parrafo.',
      URL: '/'
    },
    {
      imagen: '/',
      titulo: 'Segundo elemento',
      precio: 1000,
      preciodesc: 900,
      ubicacion: 'Sonora',
      descripcion: 'Esto es un ejemplo de una descripción y es algo larga por lo que va a ser necesario un parrafo.',
      URL: '/'
    },
    {
      imagen: '/',
      titulo: 'Tercer elemento',
      precio: 2000,
      preciodesc: 1999,
      ubicacion: 'Durango',
      descripcion: 'Esto es un ejemplo de una descripción y es algo larga por lo que va a ser necesario un parrafo.',
      URL: '/'
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
