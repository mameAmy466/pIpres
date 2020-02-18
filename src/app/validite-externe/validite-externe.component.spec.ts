import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValiditeExterneComponent } from './validite-externe.component';

describe('ValiditeExterneComponent', () => {
  let component: ValiditeExterneComponent;
  let fixture: ComponentFixture<ValiditeExterneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValiditeExterneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValiditeExterneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
