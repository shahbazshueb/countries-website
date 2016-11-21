/**
 * Created by shahbaz.ali on 11/21/2016.
 */
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {CountryService} from "../countries.service";
import {Country} from "../country";
@Component({
    moduleId: module.id,
    selector: 'country-details',
    templateUrl: 'country-details.component.html',
    styleUrls: ['styles.css']
})
export class CountryDetailsComponent implements OnInit{
    private country: Country;
    constructor(
        private route: ActivatedRoute,
        private  countryService: CountryService
    ){}
    getDetails(name: string) : void{
        this.countryService.getDetails(name)
            .then(country => {this.country = country; debugger;})
            .then(() => {
                this.countryService.getCapitalPopulation(this.country);
            });

    }
    ngOnInit():void{
        this.route.params.forEach((params: Params) =>{
            let name = params['name'];
            this.getDetails(name)

        });
    }
}