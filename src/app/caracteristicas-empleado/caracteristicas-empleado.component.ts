import { ServicioEmpleadoService } from './../services/servicio-empleado.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-caracteristicas-empleado',
  templateUrl: './caracteristicas-empleado.component.html',
  styleUrls: ['./caracteristicas-empleado.component.css']
})
export class CaracteristicasEmpleadoComponent implements OnInit {
  /* Para comunicar de hijo a padre */
  @Output() caracteristicasEmpleado = new EventEmitter<string>();


  constructor(private miServicio:ServicioEmpleadoService) { }

  ngOnInit(): void {
  }

  agregaCaracteristicas(value:string){
    this.miServicio.muestraMensaje("Característica: " + value);
    this.caracteristicasEmpleado.emit(value);
  }

}
