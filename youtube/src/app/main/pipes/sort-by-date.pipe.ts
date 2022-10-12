import { Pipe, PipeTransform } from '@angular/core';
import { IItem } from '../card';

@Pipe({ name: 'sortByDate' })
export class SortByDatePipe implements PipeTransform {
  public transform(data: Array<IItem>, value: boolean): Array<IItem> {
    if (value) {
      return data?.sort(
        (val1, val2) =>
          new Date(val1.snippet.publishedAt).getTime() -
          new Date(val2.snippet.publishedAt).getTime()
      );
    } else {
      return data?.sort(
        (val1, val2) =>
          new Date(val2.snippet.publishedAt).getTime() -
          new Date(val1.snippet.publishedAt).getTime()
      );
    }
  }
}
