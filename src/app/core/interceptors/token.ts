import { HttpHandler, HttpEvent, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class Token implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.method === 'POST') {
      const requestClone = req.clone({
          setHeaders: {
              Authorization: '#ASDFGW#ERWQERTRYT#%$%$@#$%==.'
          }
      });
      return next.handle(requestClone);
    } else {
      const requestClone = req.clone({});
      return next.handle(requestClone);
    }
  }
}
