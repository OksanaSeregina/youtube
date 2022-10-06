import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
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
