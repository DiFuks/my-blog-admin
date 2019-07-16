import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppHeaderModule, AppSidebarModule, AppFooterModule } from '@coreui/angular';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

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
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  exports: [
    RootComponent
  ]
})
export class RootModule { }
