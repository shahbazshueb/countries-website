"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/// <reference path="../node_modules/@types/node/index.d.ts" />
const core_1 = require('@angular/core');
const platform_browser_1 = require('@angular/platform-browser');
const app_component_1 = require('./app.component');
const app_routes_1 = require("./app.routes");
const header_component_1 = require("./header/header.component");
const home_component_1 = require("./home/home.component");
const countries_component_1 = require("./countries/countries.component");
const country_details_component_1 = require("./countries/details/country-details.component");
const countries_service_1 = require("./countries/countries.service");
const http_1 = require("@angular/http");
const footer_component_1 = require("./footer/footer.component");
const core_2 = require('angular2-google-maps/core');
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            app_routes_1.AppRoutingModule,
            http_1.HttpModule,
            core_2.AgmCoreModule.forRoot({
                apiKey: 'AIzaSyDi0WbtbDVRljx5JpKCTsW7zxROIyktifM'
            })
        ],
        declarations: [app_component_1.AppComponent,
            header_component_1.HeaderComponent,
            home_component_1.HomeComponent,
            countries_component_1.CountriesComponent,
            country_details_component_1.CountryDetailsComponent,
            footer_component_1.FooterComponent
        ],
        bootstrap: [app_component_1.AppComponent],
        providers: [countries_service_1.CountryService]
    }), 
    __metadata('design:paramtypes', [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map