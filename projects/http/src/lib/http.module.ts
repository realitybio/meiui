import { NgModule } from '@angular/core';
import { AuthService } from './auth.service';
import { HttpErrorHandler } from './http-error-handler.service';
import { httpInterceptorProviders } from './http-interceptors';
import { HttpComponent } from './http.component';
import { MessageService } from './message.service';
import { RequestCache, RequestCacheWithMap } from './request-cache.service';

@NgModule({
  declarations: [
    HttpComponent
  ],
  imports: [
  ],
  exports: [
    HttpComponent
  ],
  providers: [
    AuthService,
    HttpErrorHandler,
    MessageService,
    { provide: RequestCache, useClass: RequestCacheWithMap },
    httpInterceptorProviders
  ]
})
export class HttpModule { }
