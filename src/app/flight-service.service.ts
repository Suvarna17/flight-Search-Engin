import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlightServiceService {

  constructor(private http: HttpClient) {

    // this.getFlight().subscribe(data => console.log(data))
  }

  public getFlight(): Observable<any> {
    return this.http.get("../../assets/data/flight.json")
  }

}

