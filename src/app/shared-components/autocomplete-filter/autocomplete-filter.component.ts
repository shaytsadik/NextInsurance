import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-autocomplete-filter',
  templateUrl: './autocomplete-filter.component.html',
  styleUrls: ['./autocomplete-filter.component.scss']
})
export class AutocompleteFilterComponent implements OnInit {
  myControl = new FormControl();
  filteredOptions: Observable<string[]>;
  options: string[] = [];
  selected: string = "";

  @Input('Placeholder') placeholder = '';
  @Input('Options')
  set Options(value) {
    this.options = value;
    this.myControl.setValue("");
  }
  @Output('OptionSelected') optionSelected = new EventEmitter<string>();

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  onOptionSelected(value) {
    this.selected = value;
    this.optionSelected.emit(value);
  }
}