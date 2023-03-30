import { Component } from '@angular/core';
import { Location } from 'src/app/models/location.models';
@Component({
  selector: 'app-location-dashboard',
  templateUrl: './location-dashboard.component.html',
  styleUrls: ['./location-dashboard.component.scss']
})
export class LocationDashboardComponent {
 
  arrayofLocations: Location[] = [
    {
      title: 'Location 1',
      description: 'This is the first location',
      image: 'https://www.w3schools.com/w3images/lights.jpg'
    },
    {
      title: 'Location 2',
      description: 'This is the second location',
      image: 'https://www.w3schools.com/w3images/lights.jpg'
    },
    {
      title: 'Location 3',
      description: 'This is the third location',
      image: 'https://www.w3schools.com/w3images/lights.jpg'
    }
  ]
}
