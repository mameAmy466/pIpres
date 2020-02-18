import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValideExComponent } from './valide-ex.component';

describe('ValideExComponent', () => {
  let component: ValideExComponent;
  let fixture: ComponentFixture<ValideExComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValideExComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValideExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
