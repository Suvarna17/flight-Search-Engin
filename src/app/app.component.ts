import { Component, OnDestroy } from '@angular/core';
import { FlightServiceService } from './flight-service.service';
import { IfDetailsHeader } from './app.component.if-details';
import * as moment from 'moment'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  title = 'Flight Search Engine';
  message: string;
  tempFlightArray: any = [];
  filteredSearchResult: any = []
  flightSearchResult: any = [];
  fsearchResult: any = [];

  currentSearchdetails: IfDetailsHeader = {
    origin: undefined,
    destination: undefined,
    departureDate: undefined,
    returnDate: undefined,
    isOneWay: true
  };

  constructor(public FlightService: FlightServiceService) { }

  onFlightSearchRequested(form: any): void {
    if (!form.filterRequested) {
      if (this.tempFlightArray.lenght !== 0) {
        this.tempFlightArray = [];
      }
      this.FlightService.getFlight().subscribe((flightdata) => {
        // console.log("incomponet data", flightdata)
        // let flightlenght =  ;

        for (var i = 0; i < flightdata.length; i++) {
          this.message = '';
          if (form.origin == flightdata[i].from
            && form.destination == flightdata[i].to
            && form.departureDate == moment(flightdata[i].depart_date).format('DD-MM-YYYY')
            && (form.isOneWay ? true : form.returnDate == moment(flightdata[i].return_trip.depart_date).format('DD-MM-YYYY'))
          ) {
            this.tempFlightArray.push(flightdata[i]);

          }

        }

        this.flightSearchResult = this.tempFlightArray;

      },
        (error) => {
          this.message = 'Fetching issue. Please try later.';
        },
        () => {
          this.flightSearchResult.length === 0 ? this.message = 'Sorry! No Flights avaliable for current search.' :
            this.message = '';
        })

    }
    else {
      this.getFareFilteredData(form);
    }
    this.currentSearchdetails.origin = form.origin;
    this.currentSearchdetails.destination = form.destination;
    this.currentSearchdetails.isOneWay = form.isOneWay;
    this.currentSearchdetails.departureDate = form.departureDate;

    if (!form.isOneWay) {
      this.currentSearchdetails.returnDate = form.returnDate;
    }

  }

  getFareFilteredData(form) {
    if (this.filteredSearchResult.lenght !== 0) {
      this.filteredSearchResult = [];
    }


    for (let i = 0; i < this.tempFlightArray.length; i++) {
      if (Number(this.tempFlightArray[i].price) >= Number(form.fareFrom)
        && Number(this.tempFlightArray[i].price) <= Number(form.fareUpTo)) {
        this.fsearchResult = this.tempFlightArray[i];
        this.filteredSearchResult.push(this.fsearchResult)
      }

    }
    this.flightSearchResult = this.filteredSearchResult;

    this.flightSearchResult.length === 0 ?
      this.message = 'No matching flight do exist.Please try with different fare range.' :
      this.message = '';

  }
  ngOnDestroy() {
    for (let fdetail in this.tempFlightArray) {
      if (fdetail != null) {
        fdetail = null;
      }
    }
    this.tempFlightArray = null;
  }
}
