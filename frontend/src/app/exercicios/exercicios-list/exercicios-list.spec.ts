import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciciosList } from './exercicios-list';

describe('ExerciciosList', () => {
  let component: ExerciciosList;
  let fixture: ComponentFixture<ExerciciosList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExerciciosList],
    }).compileComponents();

    fixture = TestBed.createComponent(ExerciciosList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
