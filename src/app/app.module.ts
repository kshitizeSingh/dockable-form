import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

//prime
import {AccordionModule} from 'primeng/accordion';
import { ObjectiveComponent } from './objective/objective.component';
import { SummaryComponent } from './summary/summary.component';

@NgModule({
  imports:      [ BrowserModule, BrowserAnimationsModule, FormsModule ,AccordionModule],
  declarations: [ AppComponent, ObjectiveComponent, SummaryComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
