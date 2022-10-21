import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IItem } from './models';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() public card: IItem;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {}

  public onCardClick(): void {
    const id: string = this.card.id;
    this.router.navigate([id], { relativeTo: this.route });
  }
}
