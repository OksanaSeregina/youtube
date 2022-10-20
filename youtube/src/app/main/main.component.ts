import { Component, Input, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DataService, SearchService } from '../core';
import { IItem } from './card';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  public cards$: Observable<Array<IItem>>;

  constructor(
    private dataService: DataService,
    public searchService: SearchService
  ) {}

  public ngOnInit(): void {
    this.cards$ = this.dataService.getItems();
  }
}
