import { Component } from '@angular/core';
import { DataService, SearchService } from '../core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public isVisible: boolean = false;

  constructor(
    private searchService: SearchService,
    private dataService: DataService
  ) {}

  public onSearch(value: string): void {
    this.dataService.search(value);
  }

  public onFilterButtonClick(): void {
    this.isVisible = !this.isVisible;
  }

  public onDateButtonClick(): void {
    this.searchService.onDateButtonClick();
  }

  public onCountViewButtonClick(): void {
    this.searchService.onCountViewButtonClick();
  }
}
