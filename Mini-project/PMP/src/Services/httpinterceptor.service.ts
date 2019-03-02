import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs";
import { AuthenticationService } from "./authentication.service";
import { Injectable } from "@angular/core";

@Injectable()
export class TokenInterceptor implements HttpInterceptor{
    constructor(public auth:AuthenticationService){}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> 
    {
        request = request.clone({
            setHeaders: {
                'x-access-token': `${this.auth.getToken()}`
            }
        });

        return next.handle(request);
    }
    
}