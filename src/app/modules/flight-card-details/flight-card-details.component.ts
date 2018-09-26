import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-flight-card-details',
  templateUrl: './flight-card-details.component.html',
  styleUrls: ['./flight-card-details.component.css']
})
export class FlightCardDetailsComponent implements OnInit {

  constructor() {
    // this.display();
  }

  @Input()
  flightDetails: any = {};

  @Input()
  isOneWay = true;

  ngOnInit() {

  }


}
