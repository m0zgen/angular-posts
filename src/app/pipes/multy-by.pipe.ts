import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'multyby'
})

export class MultyByPipe implements PipeTransform {
  transform(num: number, pow: number = 1): number {
    return num * pow;
  }

}
