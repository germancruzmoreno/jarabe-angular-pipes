import { TestBed } from '@angular/core/testing';

import { JarabeAngularPipesService } from './jarabe-angular-pipes.service';

describe('JarabeAngularPipesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JarabeAngularPipesService = TestBed.get(JarabeAngularPipesService);
    expect(service).toBeTruthy();
  });
});
