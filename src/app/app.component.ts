import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //Zoom level
  zoom: number = 10;
  //Start Position City Council
  lat: number = 40.0153;
  lng: number = -105.2798;
  //Values
  markerName:string;
  markerLat:string;
  markerLng:string;
  markerDraggable:string;
  //Markers
  markers: marker[] = [
    {
      name: 'Marker 1',
      lat: 40.0153,
      lng: -105.2701,
      draggable: true
    },
    {
      name: 'Marker 2',
      lat: 40.0453,
      lng: -105.2788,
      draggable: true
    }
  ];

  constructor() {

  }

  clickedMarker(marker:marker, index:number){
    console.log('Clicked Marker: '+marker.name+' at index '+index);
  }

  mapClicked($event:any){
    var newMarker = {
      name: 'Untitled',
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: false
    }

    this.markers.push(newMarker);
  }

  markerDragEnd(marker:any, $event:any){
    console.log('dragEnd', marker, $event);

    var updMarker = {
      namer: marker.name,
      lat: parseFloat(marker.lat),
      lng: parseFloat(marker.lng),
      draggable: false
    }

    var newLat = $event.coords.lat;
    var newLng = $event.coords.lng;
  }

  addMarker(){
    console.log("Adding Marker");
    if(this.markerDraggable == 'yes'){
      var isDraggable = true;
    } else {
      var isDraggable = false;
    }

    var newMarker = {
      name: this.markerName,
      lat: parseFloat(this.markerLat),
      lng: parseFloat(this.markerLng),
      draggable: isDraggable
    }

    this.markers.push(newMarker);
  }
}

interface marker{
  name?: string;
  lat: number;
  lng: number;
  draggable: boolean;
}
