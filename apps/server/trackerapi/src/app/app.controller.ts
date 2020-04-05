import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  get() {
     return this.appService.get();
  }

  @Get("all")
  getAll() {
     return this.appService.getAll();
  }

  @Get("countries")
  getCountries() {
     return this.appService.getCountries();
  }

  @Get("states")
     getStates() {
     return this.appService.getStates();
  }

  //@Get()
  //getData() {
  //  return this.appService.getData();
  //}
}
