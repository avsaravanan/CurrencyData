import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'total' })
export class ConverterPipe implements PipeTransform {
 transform(value:number, args: string) {
     var code = args;
     console.log(code);
     if(code == 'GBP'){
         return value * 1.21;
     }else if(code == 'CHF'){
        return value * 1.10;
     }else{
         return value;
     }
 }
} 