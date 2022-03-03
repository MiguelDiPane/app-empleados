export class Empleado{
    /* Atributos */
    nombre:string='';
    apellido:string='';
    cargo:string='';
    salario:number=0;

    /*Constructor*/
    constructor(nombre:string,apellido:string,cargo:string,salario:number){
        this.nombre = nombre;
        this.apellido = apellido;
        this.cargo = cargo;
        this.salario = salario;
    }
}