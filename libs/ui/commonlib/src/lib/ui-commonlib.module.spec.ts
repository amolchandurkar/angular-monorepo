import { async, TestBed } from '@angular/core/testing';
import { UiCommonlibModule } from './ui-commonlib.module';

describe('UiCommonlibModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UiCommonlibModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(UiCommonlibModule).toBeDefined();
  });
});
