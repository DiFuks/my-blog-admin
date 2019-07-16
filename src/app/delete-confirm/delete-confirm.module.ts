import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeleteConfirmComponent } from '@app/delete-confirm/delete-confirm.component';
import { CommonModalModule } from '@app/common-modal/common-modal.module';

@NgModule({
  declarations: [
    DeleteConfirmComponent,
  ],
  imports: [
    CommonModule,
    CommonModalModule,
  ]
})
export class DeleteConfirmModule { }
