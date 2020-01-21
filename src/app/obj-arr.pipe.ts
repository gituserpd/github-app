import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name:'objArr'})

export class ObjArr implements PipeTransform{
    transform(value, args: string[]): any {
        let values = []
        for (let key in value) {
          values.push(value[key])
        }
        return values
      }
}