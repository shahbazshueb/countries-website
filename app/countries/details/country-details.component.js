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
const core_1 = require('@angular/core');
const router_1 = require("@angular/router");
const countries_service_1 = require("../countries.service");
let CountryDetailsComponent = class CountryDetailsComponent {
    constructor(route, countryService) {
        this.route = route;
        this.countryService = countryService;
    }
    getDetails(name) {
        this.countryService.getDetails(name)
            .then(country => { this.country = country; debugger; })
            .then(() => {
            this.countryService.getCapitalPopulation(this.country);
        });
    }
    ngOnInit() {
        this.route.params.forEach((params) => {
            let name = params['name'];
            this.getDetails(name);
        });
    }
};
CountryDetailsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'country-details',
        templateUrl: 'country-details.component.html',
        styleUrls: ['styles.css']
    }), 
    __metadata('design:paramtypes', [router_1.ActivatedRoute, countries_service_1.CountryService])
], CountryDetailsComponent);
exports.CountryDetailsComponent = CountryDetailsComponent;
//# sourceMappingURL=country-details.component.js.map