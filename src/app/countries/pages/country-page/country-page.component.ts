import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: ``
})
export class CountryPageComponent implements OnInit {
  constructor(private activatedRoute:ActivatedRoute,
    private countryService:CountriesService,
    private route:Router){

  }
  ngOnInit(): void {

    this.activatedRoute.params.pipe(
      switchMap(({id})=>this.countryService.searchCountryByAlphaCode(id)),
    ).subscribe( country=>{
      if(!country){
        return this.route.navigateByUrl('');
      }
      else{
        console.log('country exist');
      return
      }

    }

    )
  }

}
