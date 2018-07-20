import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleize',
})
export class TitleizePipe implements PipeTransform {
  static skipWords = ['of', 'the', 'in', 'a', 'or'];

  transform(title: string, args?: string[] | boolean): string {
    console.log('running pipe', title, args);

    if (typeof title !== 'string') {
      return title;
    }

    const skipWords = Array.isArray(args) ? args : TitleizePipe.skipWords;
    const processSkipwords = args !== false;

    return title.replace(/\w[^-\s]*/g, (word, index: number) => {
      console.log(index);
      console.log(word);
      if (processSkipwords && index && skipWords.includes(word.toLowerCase())) {
        return word.toLowerCase();
      }
      return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
    });
  }
}
