/**
 * Created by shahbaz.ali on 11/21/2016.
 */
import { Component } from '@angular/core';
@Component({
    moduleId: module.id,
    selector: 'jumbotron',
    templateUrl: 'jumbotron.component.html'
})
export class JumbotronComponent {
    private jbtHeading: string;
    private jbtText: string;
    private jbtBtnText: string;
    private jbtBtnUrl: string;
    constructor(){
        this.jbtHeading = "Training App";
        this.jbtText = "The Royal Air Force Aerobatics Team of the United Kingdom arrived in Karachi on Saturday as part of its Asia-Pacific and Middle East Tour 2016.";
        this.jbtBtnText="Read More";
        this.jbtBtnUrl="http://google.com";
    }
}