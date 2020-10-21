import { TestBed } from '@angular/core/testing';

import { CSVconverterService } from './csvconverter.service';

describe('CSVconverterService', () => {
  let service: CSVconverterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CSVconverterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
