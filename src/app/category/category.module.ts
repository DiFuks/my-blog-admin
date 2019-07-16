import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryService } from '@app/category/category.service';

@NgModule({
  providers: [
    CategoryService,
  ],
  imports: [
    CommonModule,
  ]
})
export class CategoryModule { }
