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
const countries_service_1 = require("./countries.service");
const router_1 = require("@angular/router");
let CountriesComponent = class CountriesComponent {
    constructor(countryService, router) {
        this.countryService = countryService;
        this.router = router;
    }
    getCountries() {
        this.countryService.getCountries().then(countries => this.countries = countries);
    }
    ngOnInit() {
        this.getCountries();
    }
    gotoDetails(code) {
        this.router.navigate(['/countries', code]);
    }
};
CountriesComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'countries',
        templateUrl: 'countries.component.html',
        styleUrls: ['styles.css']
    }), 
    __metadata('design:paramtypes', [countries_service_1.CountryService, router_1.Router])
], CountriesComponent);
exports.CountriesComponent = CountriesComponent;
//# sourceMappingURL=countries.component.js.map