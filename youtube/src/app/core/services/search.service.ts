import { Injectable } from '@angular/core';

@Injectable()
export class SearchService {
  public isVisible: boolean = false;
  public isSortByDate: boolean = false;
  public isSortByCountView: boolean = true;
  public searchValue: string = '';

  public onSearchButtonClick(value: string): void {
    this.searchValue = value;
    this.isVisible = true;
  }

  public onDateButtonClick(): void {
    this.isSortByDate = !this.isSortByDate;
  }

  public onCountViewButtonClick(): void {
    this.isSortByCountView = !this.isSortByCountView;
  }
}
