import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customCapitalize'
})
export class CustomCapitalizePipe implements PipeTransform {

  /** DEFAULT FUNCTION
   transform(value: unknown, ...args: unknown[]): string {
    return null;
    }
   */
  transform(value: string, all: boolean = true): string {
    value = value.toLocaleLowerCase();
    let words = value.split(' ');
    if (all) {
      words = words.map( word => {
        return word[0].toUpperCase() + word.substr(1);
      } )
    }else{
      words[0] = words[0][0].toUpperCase() + words[0].substr(1);
    }
    return words.join(' ');
  }

}
