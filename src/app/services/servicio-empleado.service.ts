//Aca se programa lo que debe hacer el servicio
//Ejemplo: conexion y consultas a la BD

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

//modificador export: para que se pueda usar desde cualquier punto del proyecto
export class ServicioEmpleadoService {

  constructor() { }

  muestraMensaje(mensaje:string){
    alert(mensaje);
  }
}
