import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {EventsListComponent} from "./events/events-list.component";
import { EventsAppComponent } from './events-app.component';
import { EventThumbnailComponent} from './events/event-thumbnail.component';
@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
