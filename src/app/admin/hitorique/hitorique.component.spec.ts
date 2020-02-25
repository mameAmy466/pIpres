import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HitoriqueComponent } from './hitorique.component';

describe('HitoriqueComponent', () => {
  let component: HitoriqueComponent;
  let fixture: ComponentFixture<HitoriqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HitoriqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HitoriqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
