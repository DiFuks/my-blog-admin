import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppHeaderModule, AppSidebarModule } from '@coreui/angular';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { RootComponent } from './root.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    RootComponent
  ],
  imports: [
    CommonModule,
    AppHeaderModule,
    AppSidebarModule,
    NgbDropdownModule,
    RouterModule,
  ],
  exports: [
    RootComponent
  ]
})
export class RootModule { }
