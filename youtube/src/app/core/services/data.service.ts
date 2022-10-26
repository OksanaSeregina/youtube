import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, switchMap, tap } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
import { IItem } from '../../main';

const API_URL = 'https://www.googleapis.com/youtube/v3';
export const API_KEY = '[API_KEY]';

@Injectable()
export class DataService {
  private valueSubject: BehaviorSubject<string> = new BehaviorSubject('');
  public data$: Observable<Array<IItem>>;

  constructor(private http: HttpClient) {
    this.data$ = this.valueSubject.asObservable().pipe(
      switchMap((value: string) => {
        return this.getSearch(value).pipe(
          switchMap((data) =>
            this.getVideos(data).pipe(map((value) => value.items))
          )
        );
      })
    );
  }

  public search(value: string): void {
    this.valueSubject.next(value);
  }

  private getSearch(value: string): Observable<any> {
    return this.http.get(
      `${API_URL}/search?${API_KEY}&part=snippet&type=video&maxResults=15&q=${value}`
    );
  }

  private getVideos(value: any): Observable<any> {
    const ids: Array<string> = value.items.map((item) => item.id.videoId);
    return this.http.get(
      `${API_URL}/videos?${API_KEY}&id=${ids.join(',')}&part=snippet,statistics`
    );
  }
}
