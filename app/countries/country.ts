/**
 * Created by shahbaz.ali on 11/21/2016.
 */
export  class Country{
    constructor(){
        this.neighbors = [];
    }
    countryCode: string;
    countryName: string;
    continent: string;
    population: number;
    capital: string;
    areaInSqKm: number;
    neighbors: string[];
    populationOfCapital: number;
    latitude: number;
    longitude: number;
}