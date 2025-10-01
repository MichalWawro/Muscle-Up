import { TestBed } from '@angular/core/testing';

import { AnimationGuard } from './animation-guard';

describe('AnimationGuard', () => {
  let service: AnimationGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnimationGuard);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
