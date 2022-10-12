import { Component, Input, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DataService } from '../core';
import { IItem } from './card';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  public cards$: Observable<Array<IItem>>;

  @Input() public searchValue: string;
  @Input() public isSortByDate: boolean;
  @Input() public isSortByCountView: boolean;

  constructor(private dataService: DataService) {}

  public ngOnInit(): void {
    this.cards$ = this.dataService.getItems();
  }
}
