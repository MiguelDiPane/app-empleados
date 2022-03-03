import { ServicioEmpleadoService } from './servicio-empleado.service';
//Ejemplo para simular una base de datos

import { Injectable } from '@angular/core';
import { Empleado } from '../empleado.model';

//Vamos a poder inyectar información desde afuera en el servicio con este decorador
@Injectable({
  providedIn: 'root'
})
//Export permite que pueda exportarse y compartirse con otros componentes
export class EmpleadosService {

  //Arreglo con elementos de tipo empleados
  empleados:Empleado[] = [
    new Empleado('Roberto','Di Maio','CEO',560000),
    new Empleado('Ana','Carbajo','Directora',360000),
    new Empleado('Pedro','Fernandez','Web developer',170000),
    new Empleado('María','Lopez','Programadora',320000),
  ];

  constructor(private ventanaEmergenteS: ServicioEmpleadoService) { }

  agregarEmpleadoServicio(empleado:Empleado){
    this.ventanaEmergenteS.muestraMensaje("Persona que se agrega: \n" + empleado.nombre + "\n" + "Salario: " + empleado.salario);
    this.empleados.push(empleado);
  }
}
