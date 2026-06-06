import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvaliacoesFisicasList } from './avaliacoes-fisicas-list';

describe('AvaliacoesFisicasList', () => {
  let component: AvaliacoesFisicasList;
  let fixture: ComponentFixture<AvaliacoesFisicasList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvaliacoesFisicasList],
    }).compileComponents();

    fixture = TestBed.createComponent(AvaliacoesFisicasList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
