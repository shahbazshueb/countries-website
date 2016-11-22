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
/**
 * Created by shahbaz.ali on 11/21/2016.
 */
/**
 * Created by shahbaz.ali on 11/4/2016.
 */
const core_1 = require('@angular/core');
const http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
let CountryService = class CountryService {
    constructor(http) {
        this.http = http;
        this.headers = new http_1.Headers({ 'content-type': 'application/json' });
        this.geoNamesUrl = 'http://api.geonames.org/'; // URL to web api
        this.username = 'shahbazshueb';
    }
    handleError(error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
    getCountries() {
        return this.http.get(`${this.geoNamesUrl}countryInfoJSON?username=${this.username}`)
            .toPromise()
            .then(response => response.json().geonames)
            .catch(this.handleError);
    }
    getDetails(name) {
        return this.http.get(`${this.geoNamesUrl}countryInfoJSON?username=${this.username}&country=${name.toLowerCase()}`)
            .toPromise()
            .then(response => {
            let country = response.json().geonames[0];
            country.neighbors = [];
            this.getCapitalPopulation(country);
            this.getNeighbors(country);
            return country;
        })
            .catch(this.handleError);
    }
    getNeighbors(country) {
        this.http.get(`${this.geoNamesUrl}neighboursJSON?username=${this.username}&country=${country.countryCode.toLowerCase()}`)
            .toPromise()
            .then(response => {
            var responseArray = response.json().geonames;
            responseArray.forEach(obj => country.neighbors.push(obj.name));
        })
            .catch(this.handleError);
    }
    getCapitalPopulation(country) {
        this.http.get(`${this.geoNamesUrl}/searchJSON?name_startsWith=${country.capital}&${country.countryCode}&username=${this.username}`)
            .toPromise()
            .then(response => {
            country.populationOfCapital = response.json().geonames[0].population;
            country.latitude = +response.json().geonames[0].lat;
            country.longitude = +response.json().geonames[0].lng;
        })
            .catch(this.handleError);
    }
};
CountryService = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [http_1.Http])
], CountryService);
exports.CountryService = CountryService;
//# sourceMappingURL=countries.service.js.map