import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { EventListPageComponent } from './pages/event-list-page/event-list-page.component';
import { EventDetailsPageComponent } from './page/event-details-page/event-details-page.component';

@NgModule({
  declarations: [EventListPageComponent, EventDetailsPageComponent],
  imports: [
    CommonModule,
    EventsRoutingModule
  ]
})
export class EventsModule { }
