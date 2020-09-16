import { TestBed } from '@angular/core/testing';

import { MercadoriasService } from './mercadorias.service';

describe('MercadoriasService', () => {
  let service: MercadoriasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MercadoriasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
