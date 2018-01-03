import { Component } from '@angular/core';
import { Empleado } from './empleado';

@Component({
    selector: 'empleado',
    templateUrl:'./empleado.component.html'
})

export class empleadoComponent{
   public titulo = "Componente empleados";
   public empleado: Empleado;
   public trabajadores:Array<Empleado>;
   public trabajador_externo:boolean;
   public color:string;
   public color_seleccionado:string;

   constructor(){
    this.empleado = new Empleado('Julian Escobar',20,'Ingeniero',true);
    this.trabajadores = [
        new Empleado('Julian Lucio',20,'Ingeniero',true),
        new Empleado('Carlos Perez',20,'Ingeniero',true),
        new Empleado('Ivan Zuleta',20,'Ingeniero',true),
    ] ;
    this.trabajador_externo = true;
    this.color = 'blue';
    this.color_seleccionado = 'red';
        
   }

   ngOnInit(){
     console.log(this.empleado);
     console.log (this.trabajadores);
    }

    cambiarExterno(valor){
        this.trabajador_externo = valor; 
    }

    logColorSeleccionado(){
      console.log(this.color_seleccionado);

    }
    
}