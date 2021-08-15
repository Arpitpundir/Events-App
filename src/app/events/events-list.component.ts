import { Component, OnInit } from '@angular/core';
import { ToastrService } from '../common/toastr.service';
import { EventService } from './shared/event.service';
@Component({
  selector: 'events-list',
  template: ` <div class='events-list-cont'>
    <h1>Upcoming Angular Events</h1>
    <hr />
    <div class="row">
      <div *ngFor="let event of events" class="col-md-5">
        <event-thumbnail [event]="event" (click)="handleThumbnailClick(event.name)"></event-thumbnail>
      </div>
    </div>
  </div>`,
  styles:[`
  .events-list-cont{
    padding:10px 20px;
  }`]
})
export class EventsListComponent implements OnInit {

  events:any;
  constructor(private eventService: EventService, private toastrService: ToastrService){}

  handleThumbnailClick(eventName:any){
    console.log(eventName);
    this.toastrService.success(eventName);
  };
  ngOnInit(){
    this.events = this.eventService.getEvents();
  }
}
