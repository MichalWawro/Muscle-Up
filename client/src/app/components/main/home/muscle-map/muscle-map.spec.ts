import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuscleMap } from './muscle-map';

describe('MuscleMap', () => {
  let component: MuscleMap;
  let fixture: ComponentFixture<MuscleMap>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MuscleMap]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MuscleMap);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
