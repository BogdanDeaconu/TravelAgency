import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { LocationComponent } from './location/location.component';
import { LocationsComponent } from './dashboard/locations.component';
import { TitleComponent } from './title/title.component';
import { SearchComponent } from './search/search.component';


@NgModule({
  declarations: [
    LocationComponent,
    LocationsComponent,
    TitleComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
