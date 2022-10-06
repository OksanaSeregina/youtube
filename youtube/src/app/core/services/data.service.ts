import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IItem, IResponse } from '../../main';

const API_URL = 'assets/db.json';

@Injectable()
export class DataService {
  constructor(private http: HttpClient) {}

  public getItems(): Observable<Array<IItem>> {
    return this.http.get(API_URL).pipe(map((data: IResponse) => data.items));
  }
}
