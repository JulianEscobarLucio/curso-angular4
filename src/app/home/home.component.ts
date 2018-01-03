import { Component } from '@angular/core';
import { RopaService } from '../services/ropa.service';

@Component({
  selector:'home',
  templateUrl:'./home.component.html',
  providers: [RopaService]
})

export class Homecomponent{
   public titulo = "componente Home";
   public listado_ropa:Array<String>;
   public prenda_a_guardar:string;
   public fecha;
   public nombre = "Juan Lopez";

   constructor(
     private _ropaService: RopaService
   ){
     this.fecha = new Date(2017, 4, 15);
   }

   ngOnInit(){
     console.log(this._ropaService.prueba("camiseta nike"));
     this.listado_ropa = this._ropaService.getRopa();
   }

   guardarPrenda(){
     console.log("ingresa");
     this._ropaService.addRopa(this.prenda_a_guardar);
   }

   eliminarPrenda(index:number){
     this._ropaService.deleteRopa(index);
   }


}