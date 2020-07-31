import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutklComponent } from './aboutkl.component';

describe('AboutklComponent', () => {
  let component: AboutklComponent;
  let fixture: ComponentFixture<AboutklComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutklComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutklComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
