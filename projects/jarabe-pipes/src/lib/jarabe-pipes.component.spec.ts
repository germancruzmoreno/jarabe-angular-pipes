import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JarabePipesComponent } from './jarabe-pipes.component';

describe('JarabePipesComponent', () => {
  let component: JarabePipesComponent;
  let fixture: ComponentFixture<JarabePipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JarabePipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JarabePipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
