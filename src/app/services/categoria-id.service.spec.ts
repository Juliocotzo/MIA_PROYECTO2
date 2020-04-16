import { TestBed } from '@angular/core/testing';

import { CategoriaIDService } from './categoria-id.service';

describe('CategoriaIDService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CategoriaIDService = TestBed.get(CategoriaIDService);
    expect(service).toBeTruthy();
  });
});
