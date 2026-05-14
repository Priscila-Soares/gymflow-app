import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreinosList } from './treinos-list';

describe('TreinosList', () => {
  let component: TreinosList;
  let fixture: ComponentFixture<TreinosList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TreinosList],
    }).compileComponents();

    fixture = TestBed.createComponent(TreinosList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
