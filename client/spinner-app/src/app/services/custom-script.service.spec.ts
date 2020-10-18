import { TestBed } from '@angular/core/testing';

import { CustomScriptService } from './custom-script.service';

describe('CustomScriptService', () => {
  let service: CustomScriptService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomScriptService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
