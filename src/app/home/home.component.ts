import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado.model';
import { EmpleadosService } from '../services/empleados.service';
import { ServicioEmpleadoService } from '../services/servicio-empleado.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'Listado de Empleados';
  registro = false;

  //Arreglo con elementos de tipo empleados
  empleados:Empleado[] = [];

  //Para información del formulario (binding bidireccional)
  cuadroNombre:string = "";
  cuadroApellido:string = "";
  cuadroCargo:string = "";
  cuadroSalario:number = 0;

  //La inyección de un servicio se hace SIEMPRE en el constructor
  constructor(private miServicio:ServicioEmpleadoService,private servicioEmpleados:EmpleadosService){
    //Almaceno la información en el array
    //this.empleados = this.servicioEmpleados.empleados;
  }


  //Luego del constructor se ejecuta onInit que pertenece a la interfaz onInit
  //Tambien puedo colocar los empleados aca
  //Cuando implementamos una interfaz estamos obligados a implementar todos sus métodos
  ngOnInit(): void {
    this.empleados = this.servicioEmpleados.empleados;;
  }

  registrarEmpleado(){
    let nuevoEmpleado = new Empleado(
      this.cuadroNombre,
      this.cuadroApellido,
      this.cuadroCargo,
      this.cuadroSalario
    );

    //Aca hago uso del servicio inyectado en el constructor
    //Puedo usar el método creado en el servicio
    //this.miServicio.muestraMensaje("Nombre del empleado: " + nuevoEmpleado.nombre + " " + nuevoEmpleado.apellido);
    
    //Agrego empleados al array con el servicio
    this.servicioEmpleados.agregarEmpleadoServicio(nuevoEmpleado);
    this.registro = true;
  }
}
