import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LoginService } from "./login.service";
@Injectable()
export class authorization implements HttpInterceptor{

    constructor(private login:LoginService){}
    
    intercept
    (req: HttpRequest<any>, next: HttpHandler)
    :Observable<HttpEvent<any>> {
        const token = this.login.gettoken()
        const auhtreq =req
        
        if(token!= null && this.login.islogin() ){
         auhtreq.clone({
            setHeaders:{
                'Authorization':`Bearer ${token}`
            }

         });
        }
        return next.handle(auhtreq)
    }
    
}
