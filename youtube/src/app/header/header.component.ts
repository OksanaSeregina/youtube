import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardsFacade, DataService, SearchService } from '../core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  public isVisible: boolean = false;

  constructor(
    private searchService: SearchService,
    private state: CardsFacade
  ) {}

  public onSearch(value: string): void {
    this.state.searchCards(value);
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
