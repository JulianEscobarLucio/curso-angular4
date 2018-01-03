import { Component } from '@angular/core';

@Component({
    selector:'fruta',
    templateUrl: './fruta.component.html',   
})

export class FrutaComponent{
    public nombre_componente = 'Componente de fruta';
    public listado_frutas = 'Naranja, Manzana, Pera y Sandia';
  
    public nombre:String ;
    public edad:number ;
    public mayorDeEdad:boolean ;
    public trabajos:Array<any> = ['Carpintero', 44, 'Plomero'];
    comodin:any= 23;

    constructor(){     
       this.nombre = 'Julian Escobar';
       this.edad = 20;
       this.mayorDeEdad = true;
       this.comodin = 'si';
    }

    ngOnInit(){
        this.cambiarNombre();
        this.cambiarEdad(25);
        
        var uno = 8;
        var dos = 15;

        if(uno ==8){
            var uno = 3;
            var dos = 88;
            console.log("dentro del if " + uno+ " " + dos);
        }
        console.log("Fuera del if " + uno + " " + dos);
    }

    cambiarNombre(){
        this.nombre = 'Carlos Lopez';     
        
    }

    cambiarEdad(edad){
        this.edad = edad;
    }
}
