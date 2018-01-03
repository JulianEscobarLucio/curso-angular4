import {Pipe, PipeTransform} from "@angular/core";

@Pipe({name: 'conversor'})
export class ConversorPipe implements PipeTransform{
    transform(value: number, por:number){
       let value_one = value;
       let value_two = por;
       let result = "La multiplicación: "+value_one+" x " +value_two+" = "+(value_one*value_two);
       return result;
    }
}