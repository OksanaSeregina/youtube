import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public isVisible: boolean = false;

  @Output() public searchButtonClick = new EventEmitter<string>();
  @Output() public dateButtonClick = new EventEmitter();
  @Output() public countViewButtonClick = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  public onSearchButtonClick(value: string): void {
    this.searchButtonClick.emit(value);
  }

  public onFilterButtonClick(): void {
    this.isVisible = !this.isVisible;
  }

  public onDateButtonClick(): void {
    this.dateButtonClick.emit();
  }

  public onCountViewButtonClick(): void {
    this.countViewButtonClick.emit();
  }
}
