import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { API_KEY } from '../services';

const TOKEN = 'AIzaSyAtVhBUdUZ61K2msX_6653T7lpTQxzlJ4c';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
  public intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    req = req.clone({
      url: req.url.replace(API_KEY, `key=${TOKEN}`),
    });
    return next.handle(req);
  }
}
