import { TestBed } from '@angular/core/testing';

import { SearchtextService } from './searchtext.service';

describe('SearchtextService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SearchtextService = TestBed.get(SearchtextService);
    expect(service).toBeTruthy();
  });
});
