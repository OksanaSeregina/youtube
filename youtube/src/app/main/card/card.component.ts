import { Component, Input, OnInit } from '@angular/core';
import { IItem } from './models';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() public card: IItem;

  constructor() {}

  ngOnInit(): void {}
}
