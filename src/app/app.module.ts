import { CommonModule  } from '@angular/common';
import { NgModule } from '@angular/core';
import {MatInputModule, MatTableModule, MatToolbarModule } from '@angular/material';
import {DataTableModule} from "angular-6-datatable";
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [CommonModule, BrowserModule, DataTableModule, MatToolbarModule, MatInputModule, MatTableModule],
  exports: [CommonModule, MatToolbarModule, MatInputModule, MatTableModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
