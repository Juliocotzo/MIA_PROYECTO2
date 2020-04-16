import { TestBed } from '@angular/core/testing';

import { RecuperarPasswordService } from './recuperar-password.service';

describe('RecuperarPasswordService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecuperarPasswordService = TestBed.get(RecuperarPasswordService);
    expect(service).toBeTruthy();
  });
});
