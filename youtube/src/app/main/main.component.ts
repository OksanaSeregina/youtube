import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../core';
import { IItem } from './card';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit, OnDestroy {
  private subscription: Subscription;

  public cards: Array<IItem> = [];

  @Input() public searchValue: string;
  @Input() public isSortByDate: boolean;
  @Input() public isSortByCountView: boolean;

  constructor(private dataService: DataService) {}

  public ngOnInit(): void {
    this.subscription = this.dataService.getItems().subscribe((cards) => {
      this.cards = cards;
    });
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
