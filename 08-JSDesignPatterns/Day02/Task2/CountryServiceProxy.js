import { CountryService } from "./CountryService.js";

export class CountryServiceProxy {
    constructor() {
        this.countryService = new CountryService();
        this.cache = null;
    }

    async getCountries() {
        if (this.cache) {
            console.log('Returning cached countries...');
            return this.cache;
        } else {
            this.cache = this.countryService.fetchCountries();
            console.log('Countries cached.');
            return this.cache;
        }
    }
}