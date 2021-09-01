import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopheadingComponent } from './topheading/topheading.component';
import { HttpClientModule } from '@angular/common/http';
import{NewsapiserviecesService} from './service/newsapiservieces.service';
import { TechnewsComponent } from './technews/technews.component'

// for HttpClient import:
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { GeneralComponent } from './general/general.component';
import { HealthComponent } from './health/health.component';
import { ScienceComponent } from './science/science.component';
import { SportsComponent } from './sports/sports.component';
import { TechnologyComponent } from './technology/technology.component';
@NgModule({
  declarations: [
    AppComponent,
    TopheadingComponent,
    TechnewsComponent,
    EntertainmentComponent,
    GeneralComponent,
    HealthComponent,
    ScienceComponent,
    SportsComponent,
    TechnologyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoadingBarHttpClientModule,
    
  ],
  providers: [NewsapiserviecesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
