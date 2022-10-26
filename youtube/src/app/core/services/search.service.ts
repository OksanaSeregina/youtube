import { Injectable } from '@angular/core';

@Injectable()
export class SearchService {
  public isSortByDate: boolean = false;
  public isSortByCountView: boolean = true;

  public onDateButtonClick(): void {
    this.isSortByDate = !this.isSortByDate;
  }

  public onCountViewButtonClick(): void {
    this.isSortByCountView = !this.isSortByCountView;
  }
}
