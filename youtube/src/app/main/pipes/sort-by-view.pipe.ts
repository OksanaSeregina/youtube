import { Pipe, PipeTransform } from '@angular/core';
import { IItem } from '../card';

@Pipe({ name: 'sortByView' })
export class SortByViewPipe implements PipeTransform {
  public transform(data: Array<IItem>, value: boolean): Array<IItem> {
    if (value) {
      // asc
      return data.sort(
        (val1, val2) =>
          Number(val1.statistics.viewCount) - Number(val2.statistics.viewCount)
      );
    } else {
      // desc
      return data.sort(
        (val1, val2) =>
          Number(val2.statistics.viewCount) - Number(val1.statistics.viewCount)
      );
    }
  }
}
