import { TestBed } from '@angular/core/testing';

import { AvaliacaoFisica } from './avaliacao-fisica';

describe('AvaliacaoFisica', () => {
  let service: AvaliacaoFisica;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AvaliacaoFisica);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
