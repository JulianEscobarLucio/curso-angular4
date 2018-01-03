export class Empleado{
    // public nombre:String;
    // public edad:Number;

    // constructor(nombre, edad){
    //     this.nombre = nombre;
    //     this.edad = edad;
    // }

    constructor(public nombre:string,
        public edad:number,
        public cargo:string,
        public contrato:boolean
    ){}
}