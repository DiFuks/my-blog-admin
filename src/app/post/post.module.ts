import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgbButtonsModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { PostComponent } from './post.component';
import { PostService } from '@app/post/post.service';
import { CommonTableModule } from '@app/common-table/common-table.module';
import { CommonModalModule } from '@app/common-modal/common-modal.module';
import { PostModalComponent } from '@app/post/post-modal.component';
import { DeleteConfirmModule } from '@app/delete-confirm/delete-confirm.module';
import { DeleteConfirmComponent } from '@app/delete-confirm/delete-confirm.component';

@NgModule({
  declarations: [
    PostComponent,
    PostModalComponent,
  ],
  entryComponents: [
    PostModalComponent,
    DeleteConfirmComponent
  ],
  providers: [
    PostService
  ],
  imports: [
    CommonModule,
    NgxDatatableModule,
    NgbButtonsModule,
    CommonTableModule,
    CommonModalModule,
    ReactiveFormsModule,
    FormsModule,
    DeleteConfirmModule,
  ]
})
export class PostModule { }
