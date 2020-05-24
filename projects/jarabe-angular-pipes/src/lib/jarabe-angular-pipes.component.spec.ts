import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JarabeAngularPipesComponent } from './jarabe-angular-pipes.component';

describe('JarabeAngularPipesComponent', () => {
  let component: JarabeAngularPipesComponent;
  let fixture: ComponentFixture<JarabeAngularPipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JarabeAngularPipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JarabeAngularPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
