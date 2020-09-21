import { Pipe, PipeTransform } from '@angular/core';  
@Pipe({name: 'roman'}) 

export class RomanPipe implements PipeTransform { 
    transform(value: number): string { 
        if(value > 10000) {
            return `${(value / 1000).toFixed(0)}k`;
        } else {
            return value.toString(); 
        }
    } 
} 