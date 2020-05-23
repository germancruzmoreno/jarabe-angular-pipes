import { TestBed } from '@angular/core/testing';

import { JarabePipesService } from './jarabe-pipes.service';

describe('JarabePipesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JarabePipesService = TestBed.get(JarabePipesService);
    expect(service).toBeTruthy();
  });
});
