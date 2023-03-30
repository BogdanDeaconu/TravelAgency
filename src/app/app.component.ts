import { Component } from '@angular/core';
import { Location } from 'src/app/models/location.models';
import { LocationDashboardComponent } from './location-dashboard/location-dashboard.component';
import { LocationCardComponent } from './location-card/location-card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TravelPage';
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
    },
    {
      title: 'Location 4',
      description: 'This is the fourth location',
      image: 'https://www.w3schools.com/w3images/lights.jpg'
    },
    {
      title: 'Location 5',
      description: 'This is the fifth location',
      image: 'https://www.w3schools.com/w3images/lights.jpg'
    },
    {
      title: 'Location 6',
      description: 'This is the sixth location',
      image: 'https://www.w3schools.com/w3images/lights.jpg'
    },
  ]
}
