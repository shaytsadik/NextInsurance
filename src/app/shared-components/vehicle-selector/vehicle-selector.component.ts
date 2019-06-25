import { Component, Output, EventEmitter } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { apiCommands } from 'src/app/interfaces/api-cfg.interface';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-vehicle-selector',
  templateUrl: './vehicle-selector.component.html',
  styleUrls: ['./vehicle-selector.component.scss']
})
export class VehicleSelectorComponent {
  manufacturerOptions = [];
  makeOptions = [];
  modelOptions = [];
  manufacturerSelectedOption = "";
  makeSelectedOption = "";
  modelSelectedOption = "";

  @Output('Submit') submit: EventEmitter<boolean> = new EventEmitter();

  constructor(private dataService: DataService) {
    this.dataService.api({
      type: apiCommands.GetAllManufacturers
    }).pipe(
      map(res => res.Results.map(s => s.Mfr_Name))
    ).subscribe(res => {
      this.manufacturerOptions = res;
    });
  }

  manufacturerOptionSelected(option) {
    this.manufacturerSelectedOption = option;
    this.resetMakeAndModel();
    this.dataService.api({
      type: apiCommands.GetMakesForManufacturer,
      urlParams: option
    }).pipe(
      map(res => res.Results.map(s => s.Make_Name)))
      .subscribe(res => {
        this.makeOptions = Array.from(new Set(res));
      });
  }

  makeOptionSelected(option) {
    this.makeSelectedOption = option;
    this.dataService.api({
      type: apiCommands.GetModelsForMake,
      urlParams: option
    })
      .pipe(
        map(res => res.Results.map(s => s.Model_Name)))
      .subscribe(res => {
        this.modelOptions = Array.from(new Set(res));
      });
  }

  modelOptionSelected(option) {
    this.modelSelectedOption = option;
  }

  resetMakeAndModel() {
    this.makeOptions = [];
    this.modelOptions = [];
  }

  onSubmit() {
    //this should be implemented via validators but according to stack overflow there is a known issue with angular material autocomplete and validators.
    //there is a bug with passing the possible options to validators
    let submitOk = this.manufacturerOptions.indexOf(this.manufacturerSelectedOption) != -1
      && this.makeOptions.indexOf(this.makeSelectedOption) != -1
      && this.modelOptions.indexOf(this.modelSelectedOption) != -1;

    this.submit.emit(submitOk);
  }
}
