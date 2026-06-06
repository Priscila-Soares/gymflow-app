import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvaliacaoFisicaForm } from './avaliacao-fisica-form';

describe('AvaliacaoFisicaForm', () => {
  let component: AvaliacaoFisicaForm;
  let fixture: ComponentFixture<AvaliacaoFisicaForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvaliacaoFisicaForm],
    }).compileComponents();

    fixture = TestBed.createComponent(AvaliacaoFisicaForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
