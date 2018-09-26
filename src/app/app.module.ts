import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TabModule } from 'angular-tabs-component';
import { LeftPanelComponent } from './modules/left-panel/left-panel.component';
import { HeaderComponent } from './modules/header/header.component';
import { CardHeaderComponent } from './modules/card-header/card-header.component';
import { FlightCardDetailsComponent } from './modules/flight-card-details/flight-card-details.component';
import { Ng5SliderModule } from 'ng5-slider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DpDatePickerModule } from 'ng2-date-picker';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftPanelComponent,
    CardHeaderComponent,
    FlightCardDetailsComponent,

  ],
  imports: [
    BrowserModule,
    TabModule,
    FormsModule,
    ReactiveFormsModule,
    DpDatePickerModule,
    Ng5SliderModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
