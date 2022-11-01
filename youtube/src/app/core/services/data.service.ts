import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

const API_URL = 'https://www.googleapis.com/youtube/v3';
export const API_KEY = '[API_KEY]';

@Injectable()
export class DataService {
  constructor(private http: HttpClient) {}

  public get(value: string = '') {
    return this.getSearch(value).pipe(
      switchMap((data) =>
        this.getVideos(data).pipe(map((value) => value.items))
      )
    );
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
