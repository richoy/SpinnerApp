import { TestBed } from '@angular/core/testing';

import { CenterImageService } from './center-image.service';

describe('CenterImageService', () => {
  let service: CenterImageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CenterImageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
