import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { MenuComponent } from './components/menu/menu.component';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './pages/home/home.component';
import { AuthServiceService } from './services/auth-service.service';
import { AuthGuard } from './guards/auth.guard';

@NgModule({
  declarations: [
    LayoutComponent,
    MenuComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    SharedModule
  ],
  providers: [
    AuthServiceService,
    AuthGuard
  ]
})
export class CoreModule { }
