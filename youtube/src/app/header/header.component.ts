import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SearchService } from '../core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public isVisible: boolean = false;

  constructor(private searchService: SearchService) {}

  ngOnInit(): void {}

  public onSearchButtonClick(value: string): void {
    this.searchService.onSearchButtonClick(value);
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
