import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentValidatorComponent } from './payment-validator.component';

describe('PaymentValidatorComponent', () => {
  let component: PaymentValidatorComponent;
  let fixture: ComponentFixture<PaymentValidatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentValidatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
