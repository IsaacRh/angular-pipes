import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'enablePassword'
})
export class EnablePasswordPipe implements PipeTransform {

  transform(value: string, enable: boolean = true): string {
    /*if (enable) {
      let letters = value.split('');
      letters = letters.map(letter => {
        return '*';
      });
      return letters.join('');
    }
    return value;*/
    return (enable) ? '*'.repeat(value.length) : value;
  }

}
