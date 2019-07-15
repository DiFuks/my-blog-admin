import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonTableComponent } from '@app/common-table/common-table.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  declarations: [
    CommonTableComponent
  ],
  exports: [
    CommonTableComponent
  ],
  imports: [
    CommonModule,
    NgxDatatableModule,
  ]
})
export class CommonTableModule { }
