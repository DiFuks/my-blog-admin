import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppHeaderModule, AppSidebarModule, AppFooterModule } from '@coreui/angular';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

import { RootComponent } from './root.component';

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
    AppFooterModule,
  ],
  exports: [
    RootComponent
  ]
})
export class RootModule { }
