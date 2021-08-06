import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {EventsListComponent} from "./events/events-list.component";
import { EventsAppComponent } from './events-app.component';
@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
