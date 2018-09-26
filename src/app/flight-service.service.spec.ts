import { TestBed, inject } from '@angular/core/testing';

import { FlightServiceService } from './flight-service.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

describe('FlightServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FlightServiceService],
      imports: [HttpModule, HttpClientModule]
    });
  });

  it('should be created', inject([FlightServiceService], (service: FlightServiceService) => {
    expect(service).toBeTruthy();
  }));


  it('should have get flight function', inject([FlightServiceService], (service: FlightServiceService) => {
    expect(service.getFlight).toBeTruthy();
  }));


  // it('should add correctly', inject([FlightServiceService], (service: FlightServiceService) => {
  //   expect(service.getFlight()).toBe(7);
  // }));
});
