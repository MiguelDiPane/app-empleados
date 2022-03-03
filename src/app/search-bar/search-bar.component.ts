import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado.model';
import { EmpleadosService } from '../services/empleados.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  empleados: Empleado[];

  constructor(private empleadosServicio:EmpleadosService ) { }

  ngOnInit(): void {
    this.empleados = this.empleadosServicio.empleados;
  }

}
