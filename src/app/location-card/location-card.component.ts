import { Component, Input } from '@angular/core';
import { Location } from 'src/app/models/location.models';
@Component({
  selector: 'app-location-card',
  templateUrl: './location-card.component.html',
  styleUrls: ['./location-card.component.scss']
})

export class LocationCardComponent {
visitLocation() {
throw new Error('Method not implemented.');
}
   @Input() location!: Location;
        
}
