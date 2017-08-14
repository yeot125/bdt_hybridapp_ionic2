import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PlaceProvider {

  getPlaceLocation(){
    let url='http://210.114.91.91:22893/json/foodtruck_status';
    return this.http.get(url);
  }

  getAvailablePlace(){
    let url='http://210.114.91.91:22893/json/available_place';
    return this.http.get(url);
  }

  constructor(public http: Http) {}

}
