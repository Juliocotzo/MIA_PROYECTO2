import { TestBed } from '@angular/core/testing';

import { AddProductsCarritoService } from './add-products-carrito.service';

describe('AddProductsCarritoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddProductsCarritoService = TestBed.get(AddProductsCarritoService);
    expect(service).toBeTruthy();
  });
});
