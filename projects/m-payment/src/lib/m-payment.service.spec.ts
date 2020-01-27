import { TestBed } from '@angular/core/testing';

import { MPaymentService } from './m-payment.service';

describe('MPaymentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MPaymentService = TestBed.get(MPaymentService);
    expect(service).toBeTruthy();
  });
});
