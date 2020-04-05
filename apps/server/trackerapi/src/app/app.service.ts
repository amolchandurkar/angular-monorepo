import { Injectable, HttpModule, HttpService } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';
import { map } from 'rxjs/operators';
import { Cases, CountryCases, StateCases } from '@angular-monorepo/server/commonlib';//'@angular-mymonorepo/server-commonlib';

@Injectable()
export class AppService {
   constructor(private httpService: HttpService) {}
   get(): { message: string } {
      return { message: 'C Tracker APIs' };
   }
   getAll(): Observable<Cases[]> {
      return this.httpService.get('https://corona.lmao.ninja/all').pipe(map(response => response.data));
   }
   getCountries(): Observable<CountryCases[]> {
      return this.httpService.get('https://corona.lmao.ninja/countries').pipe(map(response => response.data));
   }
   getStates(): Observable<StateCases> {
      return this.httpService.get('https://corona.lmao.ninja/states').pipe(map(response => response.data));
   }
}