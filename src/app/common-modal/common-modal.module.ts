import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonModalComponent } from '@app/common-modal/common-modal.component';
import { NgbDatepickerModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModalService } from '@app/common-modal/common-modal.service';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  declarations: [
    CommonModalComponent
  ],
  exports: [
    CommonModalComponent
  ],
  providers: [
    CommonModalService,
  ],
  imports: [
    CommonModule,
    NgbDatepickerModule,
    NgbModalModule,
    NgxDatatableModule,
  ]
})
export class CommonModalModule { }
