import { TestBed } from '@angular/core/testing';

import { BigeventproviderService } from './bigeventprovider.service';

describe('BigeventproviderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BigeventproviderService = TestBed.get(BigeventproviderService);
    expect(service).toBeTruthy();
  });
});
