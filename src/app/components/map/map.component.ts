import { Component, AfterViewInit } from '@angular/core';
import { Map, marker, tileLayer } from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit(): void {
    const map = new Map('map').setView([6.2001,-75.5785], 13);

    tileLayer('https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png', {
      maxZoom: 20,
      attribution: '<a href="https://github.com/cyclosm/cyclosm-cartocss-style/releases" title="CyclOSM - Open Bicycle render">CyclOSM</a> | Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    var locations= [
      { longitud: 6.2001, latitud: -75.5785, id: 1 },
      { longitud: 6.2315, latitud: -75.5823, id: 2 },
      { longitud: 6.2799, latitud: -75.5684, id: 3 },
      { longitud: 6.2047, latitud: -75.5877, id: 4 },
      { longitud: 6.1734, latitud: -75.5926, id: 5 },
      { longitud: 6.1520, latitud: -75.6129, id: 6 }
    ];

    for (var i = 0; i < locations.length; i++) {
      marker([locations[i].longitud, locations[i].latitud])
      .bindPopup((locations[i].id).toString())
      .addTo(map);
    }

  }

}
