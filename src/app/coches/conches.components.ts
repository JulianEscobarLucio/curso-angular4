import { Component } from '@angular/core';
import { coche } from './coche'
import { PeticionesService } from '../services/peticiones.services';

@Component({
    selector:'coches',
    templateUrl:'./coches.component.html',
    providers:[PeticionesService]
})
export class CochesComponent{
   public coche:coche;
   public coches:Array<coche>;
   public articulos;

   constructor(
       private _peticionesService: PeticionesService
   ){
       this.coche = new coche("","","");
       this.coches=[
           new coche("sea panda", "120", "blanco"),
           new coche("Renault", "130", "Rojo")
       ];
   }
   
   ngOnInit(){
       this._peticionesService.getArticulos().subscribe(
           result => {
               this.articulos = result;
               console.log(result);
               if(!this.articulos){
                   console.log("Error en el servidor");
               }
           },
           error =>{
               var errorMensage = <any>error;
               console.log(errorMensage)
           }
       );
   }

   onSubmit(){
       this.coches.push(this.coche);
   }
}