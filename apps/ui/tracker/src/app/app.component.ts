import { Component, OnInit } from '@angular/core';
import { Cases, CountryCases, StateCases } from '@angular-monorepo/server/commonlib';
import { TrackerService } from './tracker.service';
@Component({
   selector: 'angular-monorepo-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
   title = 'C* Tracker';
   cases: Cases;
   countryCases: CountryCases[];
   stateCases: StateCases[];
   constructor(private trackerService: TrackerService) {}
   ngOnInit() {
      this.getAllCases();
      this.getCountryCases();
      this.getStateCases();
   }
   getAllCases() {
      this.trackerService.getAllCases()
         .subscribe(cases => this.cases = cases);
   }
   getCountryCases() {
      this.trackerService.getCountryCases()
         .subscribe(countryCases => this.countryCases = countryCases);
   }
   getStateCases() {
      this.trackerService.getStateCases()
         .subscribe(stateCases => this.stateCases = stateCases);
   }
}