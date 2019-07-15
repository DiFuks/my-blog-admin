import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post.component';
import { PostService } from '@app/post/post.service';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgbButtonsModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonTableModule } from '@app/common-table/common-table.module';
import { CommonModalModule } from '@app/common-modal/common-modal.module';

@NgModule({
  declarations: [
    PostComponent
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
  ]
})
export class PostModule { }
