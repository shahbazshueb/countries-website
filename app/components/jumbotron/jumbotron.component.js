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
let JumbotronComponent = class JumbotronComponent {
    constructor() {
        this.jbtHeading = "Training App";
        this.jbtText = "The Royal Air Force Aerobatics Team of the United Kingdom arrived in Karachi on Saturday as part of its Asia-Pacific and Middle East Tour 2016.";
        this.jbtBtnText = "Read More";
        this.jbtBtnUrl = "http://google.com";
    }
};
JumbotronComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'jumbotron',
        templateUrl: 'jumbotron.component.html'
    }), 
    __metadata('design:paramtypes', [])
], JumbotronComponent);
exports.JumbotronComponent = JumbotronComponent;
//# sourceMappingURL=jumbotron.component.js.map