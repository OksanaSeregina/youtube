import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FiltersComponent {
  @Output() public dateButtonClick = new EventEmitter();
  @Output() public countViewButtonClick = new EventEmitter();

  public onDateClick(): void {
    this.dateButtonClick.emit();
  }

  public onCountViewClick(): void {
    this.countViewButtonClick.emit();
  }
}
