import { TestBed } from '@angular/core/testing';

import { NewsapiserviecesService } from './newsapiservieces.service';

describe('NewsapiserviecesService', () => {
  let service: NewsapiserviecesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsapiserviecesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
