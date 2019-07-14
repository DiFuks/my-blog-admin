import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootComponent } from './root.component';
import { RootRoutingModule } from '@app/root/root-routing.module';
import { AppHeaderModule, AppSidebarModule } from '@coreui/angular';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    RootComponent
  ],
  imports: [
    CommonModule,
    RootRoutingModule,
    AppHeaderModule,
    AppSidebarModule,
    NgbDropdownModule,
  ],
  exports: [
    RootComponent
  ]
})
export class RootModule { }
