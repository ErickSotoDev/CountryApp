import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent {
  public countries:Country[]=[];
  constructor(private countriesService:CountriesService){

  }
  searchBycountry(searchKey:string):void{
    console.log('SearchByCapitalComponent');
    console.log({searchKey});
    this.countriesService.searchCountry(searchKey).subscribe(countries=>{
      this.countries=countries;
    });


  }
}
