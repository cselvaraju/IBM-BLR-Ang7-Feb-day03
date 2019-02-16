import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'piglatin'
})
export class PiglatinPipe implements PipeTransform {

  transform(value: string, args?: any): string {
    if (!value) { return ''; }
    // value = value.trim();
    // const words = value.split(' ');
    // for (let i = 0; i < words.length; ++i) {
    //   words[i] = words[i].slice(1) + words[i][0] + 'a';
    // }

    // Won't work
    // words.forEach((word) => word.slice(1) + word[0] + 'a');

    // This also won't work
    // for (let word of words) {
    //   word = word.slice(1) + word[0] + 'a';
    // }
    // return words.join(' ');

    return value
            .trim()
            .split(' ')
            .map(word => word.slice(1) + word[0] + 'a')
            .join(' ');
  }

}
