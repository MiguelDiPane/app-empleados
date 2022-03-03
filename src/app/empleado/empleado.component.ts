import { Empleado } from './../empleado.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {
  
  //Sintaxis estricta: todas las variables deben estar inicializadas al crearlas
  /*Directiva Input para pasar información desde el padre */
  @Input() empleado:Empleado;
  @Input() i:number;

  constructor() { }

  ngOnInit(): void {
  }

  /*Para recibir información del componente hijo */
  arrayCaracteristicas:string[] = [];
  
  agregarCaracteristica(nuevaCaracteristica: string){
    this.arrayCaracteristicas.push(nuevaCaracteristica);
  }


}
