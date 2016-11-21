/**
 * Created by shahbaz.ali on 11/21/2016.
 */
/**
 * Created by shahbaz.ali on 11/4/2016.
 */
import {Injectable} from '@angular/core';
import  {Headers, Http} from '@angular/http';

import 'rxjs/add/operator/toPromise'


import {Country} from "./country";
import {forEach} from "@angular/router/src/utils/collection";


@Injectable()
export  class CountryService{
    private headers = new Headers({'content-type':'application/json'})
    private  geoNamesUrl = 'http://api.geonames.org/'; // URL to web api
    private username: string = 'shahbazshueb';
    constructor(private http: Http){}
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
    getCountries(): Promise<Country[]> {
        return this.http.get(`${this.geoNamesUrl}countryInfoJSON?username=${this.username}`)
            .toPromise()
            .then(response => response.json().geonames as Country[])
            .catch(this.handleError);
    }
    getDetails(name: string): Promise<Country>
    {
        return this.http.get(`${this.geoNamesUrl}countryInfoJSON?username=${this.username}&country=${name.toLowerCase()}`)
            .toPromise()
            .then( response => {
                let country: Country = response.json().geonames[0] as Country;
                country.neighbors = [];
                this.getCapitalPopulation(country);
                this.getNeighbors(country);
                return country;
            })
            .catch(this.handleError);

    }
    getNeighbors(country: Country): void
    {
        this.http.get(`${this.geoNamesUrl}neighboursJSON?username=${this.username}&country=${country.countryCode.toLowerCase()}`)
            .toPromise()
            .then(response => {var responseArray = response.json().geonames
                responseArray.forEach(obj => country.neighbors.push(obj.name))
            })
            .catch(this.handleError)
    }
    getCapitalPopulation(country:Country): void{
        this.http.get(`${this.geoNamesUrl}/searchJSON?name_startsWith=${country.capital}&username=${this.username}`)
            .toPromise()
            .then(response => {country.populationOfCapital = response.json().geonames[0].population;
            })
            .catch(this.handleError)
    }

}