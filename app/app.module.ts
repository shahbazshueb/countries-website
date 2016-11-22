/// <reference path="../node_modules/@types/node/index.d.ts" />
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import {AppRoutingModule} from "./app.routes";
import {HeaderComponent} from "./header/header.component";
import {HomeComponent} from "./home/home.component";
import {CountriesComponent} from "./countries/countries.component";
import {CountryDetailsComponent} from "./countries/details/country-details.component";
import {CountryService} from "./countries/countries.service";
import {HttpModule} from "@angular/http";
import {FooterComponent} from "./footer/footer.component";
import { AgmCoreModule } from 'angular2-google-maps/core';
@NgModule({
    imports:      [
        BrowserModule,
        AppRoutingModule,
        HttpModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyDi0WbtbDVRljx5JpKCTsW7zxROIyktifM'
        })
    ],
    declarations: [ AppComponent,
        HeaderComponent,
        HomeComponent,
        CountriesComponent,
        CountryDetailsComponent,
        FooterComponent
    ],
    bootstrap:    [ AppComponent ],
    providers:  [CountryService]
})
export class AppModule { }
