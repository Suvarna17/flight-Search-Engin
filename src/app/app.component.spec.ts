import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './modules/header/header.component';
import { LeftPanelComponent } from './modules/left-panel/left-panel.component';
import { TabModule } from 'angular-tabs-component';
import { CardHeaderComponent } from './modules/card-header/card-header.component';
import { FlightCardDetailsComponent } from './modules/flight-card-details/flight-card-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DpDatePickerModule } from 'ng2-date-picker';
import { Ng5SliderModule } from 'ng5-slider';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderComponent,
        LeftPanelComponent,
        CardHeaderComponent,
        FlightCardDetailsComponent,
      ],
      imports: [TabModule, FormsModule, ReactiveFormsModule, DpDatePickerModule, Ng5SliderModule, HttpModule, HttpClientModule]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it("should have as title Flight Search Engine", async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Flight Search Engine');
  }));
});
