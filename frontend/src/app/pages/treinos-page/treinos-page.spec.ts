import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreinosPage } from './treinos-page';

describe('TreinosPage', () => {
  let component: TreinosPage;
  let fixture: ComponentFixture<TreinosPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TreinosPage],
    }).compileComponents();

    fixture = TestBed.createComponent(TreinosPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
