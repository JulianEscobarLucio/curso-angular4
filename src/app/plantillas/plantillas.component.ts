import { Component } from '@angular/core';

@Component({
    selector:'plantillas',
    templateUrl:'./plantillas.component.html',
})
export class PlatillasComponent{
    public titulo;
    public administrador;

   constructor(){
       this.titulo = "plantillas ngTemplate en Angular";
       this.administrador = true;
   }

   cambiar(value){
       this.administrador=value; 
   }
   
}