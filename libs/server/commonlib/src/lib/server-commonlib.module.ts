import { Module } from '@nestjs/common';

@Module({
  controllers: [],
  providers: [],
  exports: []
})
export class ServerCommonlibModule {}

export interface Cases {
  cases: number;
  deaths: number;
  recovered: number;
  updated: number;
}
export interface CountryCases {
  country: string;
  cases: number;
  todayCases: number;
  deaths: number;
  todayDeaths: number;
  recovered: number;
  active: number;
  critical: number;
  casesPerOneMillion: number;
}
export interface StateCases {
  state: string;
  cases: number;
  todayCases: number;
  deaths: number;
  todayDeaths: number;
  recovered: number;
  active: number;
}



