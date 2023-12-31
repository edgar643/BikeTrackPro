import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
 
@Injectable()
export class RequestInterceptor implements HttpInterceptor {
 
  constructor() {}
 
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
  console.log("request",request)
    if (!request.url.endsWith('v1/auth')) {
        
      const token = localStorage.getItem('acces_token');
 
      request = request.clone({
     headers: request.headers.set('Authorization', `Bearer ${token}`)
      });
    }
    
    return next.handle(request);
  }
}
 