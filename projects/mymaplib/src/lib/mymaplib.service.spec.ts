import { TestBed } from '@angular/core/testing';

import { MymaplibService } from './mymaplib.service';

describe('MymaplibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MymaplibService = TestBed.get(MymaplibService);
    expect(service).toBeTruthy();
  });
});
