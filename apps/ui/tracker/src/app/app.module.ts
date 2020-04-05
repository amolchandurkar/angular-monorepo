import { APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ConfigService } from './config.service';
import { of, Observable, ObservableInput } from 'node_modules/rxjs';
import { map, catchError } from 'rxjs/operators';
function load(http: HttpClient, config: ConfigService): (() => Promise<boolean>) {
   return (): Promise<boolean> => {
      return new Promise<boolean>((resolve: (a: boolean) => void): void => {
      http.get('./assets/config.json')
         .pipe(
            map((x: ConfigService) => {
               config.baseUrl = x.baseUrl;
               resolve(true);
            }),
            catchError((x: { status: number }, caught: Observable<void>): ObservableInput<{}> => {
               if (x.status !== 404) {
                  resolve(false);
               }
               config.baseUrl = 'http://localhost:3333/api/v1/';
               resolve(true);
               return of({});
            })
         ).subscribe();
      });
   };
}
@NgModule({
   declarations: [AppComponent],
   imports: [BrowserModule, HttpClientModule],
   providers: [{
      provide: APP_INITIALIZER,
      deps: [HttpClient, ConfigService],
      useFactory: load,
      multi: true
   }],
   bootstrap: [AppComponent]
})
export class AppModule { }