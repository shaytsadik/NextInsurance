import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material.module';
import { AutocompleteFilterComponent } from '../autocomplete-filter/autocomplete-filter.component';

@NgModule({
  declarations: [
    AutocompleteFilterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports:[
    AutocompleteFilterComponent
  ]
})
export class VehicleSelectorModule { }
