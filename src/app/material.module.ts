import { NgModule } from '@angular/core';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule, MatInputModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    declarations: [],
    imports: [
        MatAutocompleteModule,
        MatFormFieldModule,
        MatNativeDateModule,
        MatInputModule,
        MatButtonModule
    ],
    exports: [
        MatAutocompleteModule,
        MatFormFieldModule,
        MatNativeDateModule,
        MatInputModule,
        MatButtonModule
    ],
    providers: []
})
export class MaterialModule { }