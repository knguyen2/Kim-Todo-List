import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { 
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatCardModule,
  MatListModule, 
  MatIconModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import 'hammerjs';

import { AppComponent } from './app.component';
import { KnguyenTodolistComponent } from './knguyen-todolist/knguyen-todolist.component';
import { ListingComponent } from './listing/listing.component';


@NgModule({
  declarations: [
    AppComponent,
    KnguyenTodolistComponent,
    ListingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
