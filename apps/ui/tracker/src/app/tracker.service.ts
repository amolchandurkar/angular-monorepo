import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config.service';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Cases, CountryCases, StateCases } from '@angular-monorepo/server/commonlib';
@Injectable({
   providedIn: 'root'
})
export class TrackerService {
constructor(private http: HttpClient, private configService: ConfigService) { }
configBaseUrl = this.configService.baseUrl;
getAllCases(): Observable<Cases> {
   return this.http.get<Cases>(this.configBaseUrl + "all")
   .pipe(
      tap(_ => console.log('Fetched All Case Summary data')),
      catchError(this.handleError<Cases>('getAllCases', ))
   )
}
getCountryCases(): Observable<CountryCases[]> {
   return this.http.get<CountryCases[]>(this.configBaseUrl + "countries?sort=cases")
   .pipe(
      tap(_ => console.log('Fetched Country Case Summary data')),
      catchError(this.handleError<CountryCases[]>('getCountryCases', []))
   )
}
getStateCases(): Observable<StateCases[]> {
   return this.http.get<StateCases[]>(this.configBaseUrl + "states")
.pipe(
   tap(_ => console.log('Fetched State Case Summary data')),
   catchError(this.handleError<StateCases[]>('getStateCases', []))
   )
}
private handleError<T> (operation = 'operation', result?: T) {
   return (error: any): Observable<T> => {
   // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      console.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
      };
   }
}