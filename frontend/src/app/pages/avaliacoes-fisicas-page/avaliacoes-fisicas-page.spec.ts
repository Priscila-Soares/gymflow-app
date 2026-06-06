import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvaliacoesFisicasPage } from './avaliacoes-fisicas-page';

describe('AvaliacoesFisicasPage', () => {
  let component: AvaliacoesFisicasPage;
  let fixture: ComponentFixture<AvaliacoesFisicasPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvaliacoesFisicasPage],
    }).compileComponents();

    fixture = TestBed.createComponent(AvaliacoesFisicasPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
