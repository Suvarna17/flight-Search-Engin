import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Options, ChangeContext, PointerType } from 'ng5-slider';
import * as momentNs from 'moment';
import { Moment } from 'moment';
const moment = momentNs;

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.css']
})
export class LeftPanelComponent implements OnInit {
  private formData: any;
  minValue: number = 0;
  maxValue: number = 10000;

  options: Options = {
    floor: 0,
    ceil: 10000
  };

  logText: string = '';
  @Input()
  isOneWay = false;
  passangerLists: any = ['1', '2', '3', '4']
  validationMinDate: Moment;



  myForm: FormGroup;
  constructor(private fb: FormBuilder) {

  }

  @Output()
  flightSearchInitiated: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit() {
    const group = {
      'origin': ['', Validators.required],
      'destination': ['', Validators.required],
      'departureDate': ['', Validators.required],
      'passanger': ['', Validators.required]

    };
    if (!this.isOneWay) {
      group['returnDate'] = ['', [Validators.required, control => this.validationMinDate &&
        moment(control.value).isBefore(this.validationMinDate) ? { minDate: 'minDate Invalid' } : undefined
      ]];
    }

    this.myForm = this.fb.group(group);
    console.log(this.myForm)

  }

  onSubmit(form: any): void {
    this.formData = form;

    // const searchDepartureDate: moment.Moment = this.getConvertedDateFormat(form.departureDate);
    console.log('you submitted value:', form.departureDate._d.getDate());
    console.log("return date", form.returnDate);
    console.log("departureDate date", moment(form.departureDate).format('DD-MM-YYYY'));

    // callback to parent 
    this.flightSearchInitiated.emit({
      origin: form.origin.toUpperCase(),
      destination: form.destination.toUpperCase(),
      departureDate: moment(form.departureDate).format('DD-MM-YYYY'),
      returnDate: form.returnDate,
      isOneWay: this.isOneWay,
      passanger: form.passanger,
      filterRequested: false,
    });

    console.log(this.flightSearchInitiated.emit);

  }

  onUserChangeStart(changeContext: ChangeContext): void {
    this.logText += `onUserChangeStart(${this.getChangeContextString(changeContext)})\n`;
  }

  onUserChange(changeContext: ChangeContext): void {
    this.logText += `onUserChange(${this.getChangeContextString(changeContext)})\n`;
  }

  onUserChangeEnd(changeContext: ChangeContext): void {
    this.logText += `onUserChangeEnd(${this.getChangeContextString(changeContext)})\n`;


    this.flightSearchInitiated.emit({
      origin: this.formData.origin,
      destination: this.formData.destination,
      departureDate: this.formData.departureDate,
      returnDate: this.formData.returnDate,
      fareFrom: changeContext.value,
      fareUpTo: changeContext.highValue,
      filterRequested: true,
      isOneWay: this.isOneWay
    });
    console.log("farefrom");
  }

  getChangeContextString(changeContext: ChangeContext): string {
    return `{pointerType: ${changeContext.pointerType === PointerType.Min ? 'Min' : 'Max'}, ` +
      `value: ${changeContext.value}, ` +
      `highValue: ${changeContext.highValue}}`;
  }


}
