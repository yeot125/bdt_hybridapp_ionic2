import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {

  @ViewChild('map') map;

  constructor(public navCtrl: NavController, public navParams: NavParams, public geolocation: Geolocation) {}

  setCurrentPosition(){
    this.geolocation.getCurrentPosition().then((res)=>{
      this.map.setCenter(new google.maps.LatLng(res.coords.latitude, res.coords.longitude));
    });
  }
}
