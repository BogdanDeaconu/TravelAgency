import { Component } from '@angular/core';
import { Location } from '../../interfaces/location';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent {

  arrayofLocations: Location[] = [
    {
      name: "Location 1",
      description: 'This is the first location',
      imageURL: 'https://www.w3schools.com/w3images/lights.jpg'
    },
    {
      name: "Location 2",
      description: 'This is the second location',
      imageURL: 'https://www.w3schools.com/w3images/lights.jpg'
    },
    {
      name: "Location 3",
      description: 'This is the third location',
      imageURL: 'https://www.w3schools.com/w3images/lights.jpg'
    },
    {
      name: "Location 4",
      description: 'This is the fourth location',
      imageURL: 'https://www.w3schools.com/w3images/lights.jpg'
    },
    {
      name: "Location 5",
      description: 'This is the fifth location',
      imageURL: 'https://www.w3schools.com/w3images/lights.jpg'
    },
    {
      name: "Location 6",
      description: 'This is the sixth location',
      imageURL: 'https://www.w3schools.com/w3images/lights.jpg'
    }
  ]
}
