import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SousnavbarComponent } from './sousnavbar.component';

describe('SousnavbarComponent', () => {
  let component: SousnavbarComponent;
  let fixture: ComponentFixture<SousnavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SousnavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SousnavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
