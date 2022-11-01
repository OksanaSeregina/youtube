import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IItem } from './models';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  @Input() public card: IItem;

  constructor(private route: ActivatedRoute, private router: Router) {}

  public onCardClick(): void {
    const id: string = this.card.id;
    this.router.navigate([id], { relativeTo: this.route });
  }
}
