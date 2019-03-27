import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { EventListPageComponent } from './pages/event-list-page/event-list-page.component';

@NgModule({
  declarations: [EventListPageComponent],
  imports: [
    CommonModule,
    EventsRoutingModule
  ]
})
export class EventsModule { }
