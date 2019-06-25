import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageComponent } from './home-page.component';
import { VehicleSelectorModule } from '../shared-components/vehicle-selector/vehicle-selector.module';
import { VehicleSelectorComponent } from '../shared-components/vehicle-selector/vehicle-selector.component';
import { MaterialModule } from '../material.module';

@NgModule({
  declarations: [
    HomePageComponent,
    VehicleSelectorComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HomePageRoutingModule,
    VehicleSelectorModule
  ]
})
export class HomePageModule { }
