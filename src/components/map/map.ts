import { Component } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';
import { PlaceProvider } from '../../providers/place/place';

@Component({
  selector: 'map',
  templateUrl: 'map.html'
})
export class MapComponent {
  map:any;
  placeLocation:any;
  available_place:any;
  prev_infowindow:google.maps.InfoWindow; 

  ngOnInit(){
    this.place.getPlaceLocation().map(l_data=> l_data.json()).subscribe((l_data)=>{
      this.placeLocation = l_data;
       
      this.geolocation.getCurrentPosition().then((res)=>{
        this.map = new google.maps.Map(document.getElementById('map'),
          { zoom:14,
            center: {lat:res.coords.latitude, lng:res.coords.longitude},
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            mapTypeControl: false,
            streetViewControl: false
          }
        );
        google.maps.event.addListener(this.map, 'click',()=>{
            if( this.prev_infowindow ) {
              this.prev_infowindow.close();
            }
          });
      }).then(()=>{
        this.place.getAvailablePlace().map(a_data=>a_data.json()).subscribe((a_data)=>{
           this.available_place = a_data;
           for(let place of this.placeLocation){
          let marker = new google.maps.Marker({
            map:this.map,
            position: new google.maps.LatLng(place.lat, place.lng),
            animation:google.maps.Animation.DROP,
            icon: 'assets/icon/truck_marker.png'
          });
          let infowin = new google.maps.InfoWindow({
            content:
            '<h4>'+place.name+'</h4>'+
            '<p>인허가일자: '+place.date+'</p>'+
            '<p>주소: '+place.address+'</p>'
          });
          google.maps.event.addListener(marker, 'click',()=>{
            if( this.prev_infowindow ) {
              this.prev_infowindow.close();
            }
            infowin.open(this.map, marker);
            this.prev_infowindow = infowin;
          });
        }
        for(let place of this.available_place){
          let marker = new google.maps.Marker({
            map:this.map,
            position: new google.maps.LatLng(place.lat, place.lng),
            animation:google.maps.Animation.DROP,
            icon: 'assets/icon/available_truck.png'
          });
          let infowin = new google.maps.InfoWindow({
            content:
            '<h4>'+place.name+'</h4>'+
            '<p>이용 가능 대수: '+place.max+'</p>'+
            '<p>주소: '+place.address+'</p>'
          });
          google.maps.event.addListener(marker, 'click',()=>{
            if( this.prev_infowindow ) {
              this.prev_infowindow.close();
            }
            infowin.open(this.map, marker);
            this.prev_infowindow = infowin;
          });
        }
       });
      }).then(()=>{
        
      })
    });  
  }

  setCenter(pos: google.maps.LatLng){
    this.map.setCenter(pos);
    this.map.setZoom(14);
  }

  constructor(public place:PlaceProvider, public geolocation:Geolocation) {}

}
