import { Component } from '@angular/core';
@Component({
    selector: 'my-app',
    template: `
        
            <div class="jumbotron">
                <header></header>
            </div>
        <div class="container">
            <router-outlet></router-outlet>
        </div>
        <footer></footer>`


})
export class AppComponent { }