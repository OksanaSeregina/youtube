import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CardsFacade, SearchService } from '../core';
import { IItem } from '../main';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent implements OnInit {
  public cards$: Observable<Readonly<Array<IItem>>>;

  constructor(
    public searchService: SearchService,
    private state: CardsFacade
  ) {}

  public ngOnInit(): void {
    this.cards$ = this.state.combinedCards$;
  }
}
