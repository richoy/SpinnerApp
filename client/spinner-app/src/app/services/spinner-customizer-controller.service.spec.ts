import { TestBed } from '@angular/core/testing';

import { SpinnerCustomizerControllerService } from './spinner-customizer-controller.service';

describe('SpinnerCustomizerControllerService', () => {
  let service: SpinnerCustomizerControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpinnerCustomizerControllerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
