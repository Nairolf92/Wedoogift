import { TestBed } from '@angular/core/testing';

import { WedoofigiftAPIService } from './wedoofigift-api.service';

describe('WedoofigiftAPIService', () => {
  let service: WedoofigiftAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WedoofigiftAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
