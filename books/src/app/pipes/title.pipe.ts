import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'title'
})
export class TitlePipe implements PipeTransform {
  private prepositions: string[] = [
    "the",
    "of",
    "a",
    "for",
    "and",
    "or",
  ];
  
  transform(value: string, args?: any): string {
    if (value === null) return 'Not assigned';
    value = value.split(" ").map(
      (word) => {
        return this.prepositions.includes(word) ? word : word.charAt(0).toUpperCase() + word.slice(1);
      }
    ).join(" ");
    return value.charAt(0).toUpperCase() + value.slice(1);
  }

}
