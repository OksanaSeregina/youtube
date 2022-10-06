import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent implements OnInit {
  @Output() public dateButtonClick = new EventEmitter();
  @Output() public countViewButtonClick = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  public onDateClick(): void {
    this.dateButtonClick.emit();
  }

  public onCountViewClick(): void {
    this.countViewButtonClick.emit();
  }
}
