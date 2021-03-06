import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgbButtonsModule } from '@ng-bootstrap/ng-bootstrap';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { MonacoEditorModule } from 'ngx-monaco-editor';

import { PostComponent } from './post.component';
import { PostService } from '@app/post/post.service';
import { CommonTableModule } from '@app/common-table/common-table.module';
import { CommonModalModule } from '@app/common-modal/common-modal.module';
import { PostModalComponent } from '@app/post/post-modal.component';
import { DeleteConfirmModule } from '@app/delete-confirm/delete-confirm.module';
import { DeleteConfirmComponent } from '@app/delete-confirm/delete-confirm.component';
import { CategoryModule } from '@app/category/category.module';

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
    NgbButtonsModule,
    CommonTableModule,
    CommonModalModule,
    ReactiveFormsModule,
    FormsModule,
    DeleteConfirmModule,
    CKEditorModule,
    CategoryModule,
    MonacoEditorModule.forRoot({
      defaultOptions: {
        scrollBeyondLastLine: false,
      }
    }),
  ]
})
export class PostModule { }
