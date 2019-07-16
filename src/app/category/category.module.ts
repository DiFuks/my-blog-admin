import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CategoryService } from '@app/category/category.service';
import { CategoryComponent } from '@app/category/category.component';
import { CommonTableModule } from '@app/common-table/common-table.module';
import { DeleteConfirmModule } from '@app/delete-confirm/delete-confirm.module';
import { DeleteConfirmComponent } from '@app/delete-confirm/delete-confirm.component';
import { CategoryModalComponent } from '@app/category/category-modal.component';
import { CommonModalModule } from '@app/common-modal/common-modal.module';

@NgModule({
  declarations: [
    CategoryModalComponent,
    CategoryComponent,
  ],
  entryComponents: [
    CategoryModalComponent,
    DeleteConfirmComponent,
  ],
  providers: [
    CategoryService,
  ],
  imports: [
    CommonModule,
    CommonTableModule,
    DeleteConfirmModule,
    CommonModalModule,
    FormsModule,
  ]
})
export class CategoryModule { }
