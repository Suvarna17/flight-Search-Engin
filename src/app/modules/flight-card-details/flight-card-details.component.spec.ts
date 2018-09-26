import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightCardDetailsComponent } from './flight-card-details.component';

describe('FlightCardDetailsComponent', () => {
  let component: FlightCardDetailsComponent;
  let fixture: ComponentFixture<FlightCardDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightCardDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightCardDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
