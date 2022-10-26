import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DataService } from '../../core';
import { IItem } from '../card';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  public card$: Observable<IItem>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    const id: string = this.route.snapshot.params.id;
    this.card$ = this.dataService.data$.pipe(
      map((cards: IItem[]) => {
        const card: IItem = cards.find((card) => card.id === id);
        if (card) {
          return card;
        }
        this.router.navigate(['404']);
      })
    );
  }
}
