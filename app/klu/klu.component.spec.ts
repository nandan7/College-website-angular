import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KluComponent } from './klu.component';

describe('KluComponent', () => {
  let component: KluComponent;
  let fixture: ComponentFixture<KluComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [KluComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KluComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
