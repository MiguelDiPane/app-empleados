import { EmpleadosService } from './services/empleados.service';
import { ServicioEmpleadoService } from './services/servicio-empleado.service';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { CaracteristicasEmpleadoComponent } from './caracteristicas-empleado/caracteristicas-empleado.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { HomeComponent } from './home/home.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ContactoComponent } from './contacto/contacto.component';
import { Routes, RouterModule } from '@angular/router';

//Para el enrutamiento, en este arreglo de tipo routes van las rutas
//Se crea un objeto por cada ruta
const appRoutes:Routes=[
  //En esta ruta quiero que cargue el home
  //path es la URL
  {path:'',component:HomeComponent}, 
  {path:'proyectos',component:ProyectosComponent},
  {path:'nosotros',component:NosotrosComponent},
  {path:'contacto',component:ContactoComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    EmpleadoComponent,
    CaracteristicasEmpleadoComponent,
    SearchBarComponent,
    HomeComponent,
    ProyectosComponent,
    NosotrosComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes) //Para indicar que voy a usar la constante para enrutar
  ],
  //Aca se registran los servicios
  providers: [
    ServicioEmpleadoService,
    EmpleadosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
