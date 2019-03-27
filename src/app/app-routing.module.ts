import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './core/components/layout/layout.component';
import { CoreModule } from './core/core.module';

const routes: Routes = [
  { path: '', component: LayoutComponent, loadChildren: () => CoreModule },
  { path: 'events', component: LayoutComponent, loadChildren: './events/events.module#EventsModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
