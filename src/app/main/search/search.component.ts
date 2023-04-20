import { Component } from '@angular/core';
import { Information } from 'src/app/interfaces/information';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
   
    listOfInformation: Information[] = [
      {
        name: 'Information 1',
        description: 'This is the first information',
        title: 'Information 1'
      },
      {
        name: 'Information 2',
        description: 'This is the second information',
        title: 'Information 2'
      },
      {
        name: 'Information 3',
        description: 'This is the third information',
        title: 'Information 3'
      },
      {
        name: 'Information 4',
        description: 'This is the fourth information',
        title: 'Information 4'
      }
    ]
}
