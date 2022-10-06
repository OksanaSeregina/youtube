import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
})
export class SearchFormComponent implements OnInit {
  @Output() public searchButtonClick = new EventEmitter<string>();
  @Output() public filterButtonClick = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  public onSearchClick(value: string): void {
    this.searchButtonClick.emit(value);
  }

  public onFilterClick(): void {
    this.filterButtonClick.emit();
  }
}
