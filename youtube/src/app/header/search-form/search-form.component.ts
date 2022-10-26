import {
  Component,
  ElementRef,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { debounceTime, filter, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
})
export class SearchFormComponent implements OnInit, OnDestroy {
  private subscription: Subscription;

  public searchGroup: FormGroup;

  @ViewChild('input', { static: true }) input: ElementRef;

  @Output() public search = new EventEmitter<string>();
  @Output() public filterButtonClick = new EventEmitter();

  constructor() {
    this.searchGroup = new FormGroup({
      search: new FormControl(),
    });
  }

  public ngOnInit(): void {
    this.subscription = this.searchGroup
      .get('search')
      .valueChanges.pipe(
        filter((val: any) => val.length > 3 || !val.length),
        debounceTime(300),
        distinctUntilChanged()
      )
      .subscribe((value: string) => this.search.emit(value));
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public onFilterClick(): void {
    this.filterButtonClick.emit();
  }
}
