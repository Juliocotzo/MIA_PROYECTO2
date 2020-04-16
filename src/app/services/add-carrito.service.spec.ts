import { TestBed } from '@angular/core/testing';

import { AddCarritoService } from './add-carrito.service';

describe('AddCarritoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddCarritoService = TestBed.get(AddCarritoService);
    expect(service).toBeTruthy();
  });
});
