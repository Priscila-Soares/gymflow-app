import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercicioForm } from './exercicio-form';

describe('ExercicioForm', () => {
  let component: ExercicioForm;
  let fixture: ComponentFixture<ExercicioForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExercicioForm],
    }).compileComponents();

    fixture = TestBed.createComponent(ExercicioForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
