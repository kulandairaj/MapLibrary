import { TestBed } from '@angular/core/testing';

import { PixipoclibService } from './pixipoclib.service';

describe('PixipoclibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PixipoclibService = TestBed.get(PixipoclibService);
    expect(service).toBeTruthy();
  });
});
