import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunosPage } from './alunos-page';

describe('AlunosPage', () => {
  let component: AlunosPage;
  let fixture: ComponentFixture<AlunosPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlunosPage],
    }).compileComponents();

    fixture = TestBed.createComponent(AlunosPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
