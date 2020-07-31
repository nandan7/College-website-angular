import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClgComponent } from './clg.component';

describe('ClgComponent', () => {
  let component: ClgComponent;
  let fixture: ComponentFixture<ClgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
