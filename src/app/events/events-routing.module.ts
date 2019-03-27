import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventListPageComponent } from './pages/event-list-page/event-list-page.component';
import { EventDetailsPageComponent } from './page/event-details-page/event-details-page.component';
import { AuthGuard } from '../core/guards/auth.guard';

const routes: Routes = [
  { path: '', component: EventListPageComponent },
  { path: ':id', component: EventDetailsPageComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }
