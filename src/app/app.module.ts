import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {MatFormFieldModule, MatInputModule, MatButtonModule} from '@angular/material';

import { AppComponent } from './app.component';
import { OoFormComponent } from './oo-form/oo-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CustomInputComponent } from './core/form/custom-input/custom-input.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    OoFormComponent,
    CustomInputComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
