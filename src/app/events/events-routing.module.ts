import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventListPageComponent } from './pages/event-list-page/event-list-page.component';

const routes: Routes = [
  { path: '', component: EventListPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }
