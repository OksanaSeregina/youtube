import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public isVisible$: Observable<boolean>;

  constructor(private router: Router) {
    this.isVisible$ = this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map((data: NavigationEnd) => {
        return (
          data.url === '/' ||
          data.url.includes('/catalog') ||
          data.url.includes('/auth')
        );
      })
    );
  }
}
