/**
 * Created by shahbaz.ali on 11/21/2016.
 */
import {Component, OnInit} from '@angular/core';
import {CountryService} from "./countries.service";
import {Country} from "./country";
import {Router} from "@angular/router";
@Component({
    moduleId: module.id,
    selector: 'countries',
    templateUrl: 'countries.component.html',
    styleUrls: ['styles.css']
})
export class CountriesComponent implements OnInit{
    private countries: Country[];
    constructor(
        private countryService: CountryService,
        private  router: Router
    ){}
    getCountries(): void {

        this.countryService.getCountries().then(countries => this.countries = countries);
    }
    ngOnInit(){
        this.getCountries();
    }
    gotoDetails(code: string){
        this.router.navigate(['/countries', code]);
    }
}