/**
 * Created by shahbaz.ali on 11/21/2016.
 */
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from "./components/Pages/about.component";
import { NgModule }      from '@angular/core';
import {HomeComponent} from "./home/home.component";
import {CountriesComponent} from "./countries/countries.component";
import {CountryDetailsComponent} from "./countries/details/country-details.component";
export const appRoutes: Routes = [
    {
        path: '',
        redirectTo:'/home',
        pathMatch:'full'
    },
    {
        path:'home',
        component:HomeComponent
    },
    {
        path:'countries',
        component:CountriesComponent
    },
    {
        path:'countries/:name',
        component: CountryDetailsComponent
    }


];

@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})
export  class AppRoutingModule {}
