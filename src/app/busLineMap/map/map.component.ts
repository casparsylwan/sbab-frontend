import { Component, OnInit } from '@angular/core';
import { latLng, MapOptions, tileLayer } from 'leaflet';
import { BusServiceService } from 'src/app/service/bus-service.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  bulines: any;
  mapOptions!: MapOptions;

  constructor(private busLineService: BusServiceService) {

      busLineService.getAllBusLines()
        .subscribe((bus) => console.log(bus));

   }

  ngOnInit(): void {
    this.initializeMapOptions();
  }

  private initializeMapOptions() {
    this.mapOptions = {
      center: latLng(59.7592229997864, 18.6988859999314),
      zoom: 18,
      layers: [
        tileLayer(
          'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
          {
            maxZoom: 18,
            attribution: 'Map data © OpenStreetMap contributors'
          })
      ],
    };
  }

}
