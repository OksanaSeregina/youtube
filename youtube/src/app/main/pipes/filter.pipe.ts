import { Pipe, PipeTransform } from '@angular/core';
import { IItem } from '../card';

@Pipe({ name: 'filter' })
export class FilterPipe implements PipeTransform {
  public transform(data: Array<IItem>, value: string): Array<IItem> {
    if (!value) {
      return data;
    }
    return data?.filter((card) =>
      card.snippet.title.toUpperCase().includes(value.toUpperCase())
    );
  }
}
