import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe'
})
export class CustomPipePipe implements PipeTransform {

  transform(amount: number, ...args: unknown[]): unknown {
    let res: number = amount * 4100;
     const tail = res % 100;

    if (tail >= 50) {
      res = res + (100 - tail);
    } else {
      res = res - tail;
    }

    const formattedRes: string = res.toLocaleString();
    return formattedRes;
  }

}
