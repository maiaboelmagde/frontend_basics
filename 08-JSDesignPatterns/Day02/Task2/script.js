import { CountryService } from "./CountryService.js";
import { CountryServiceProxy } from "./CountryServiceProxy.js";

const proxy = new CountryServiceProxy();

// First call will fetch Countries
const countries =  proxy.getCountries();
console.log(countries);

// Second call will use cached data
const cachedCountries =  proxy.getCountries();
console.log(cachedCountries);
