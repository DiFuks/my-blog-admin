import { Component, OnInit } from '@angular/core';
import { TableColumn } from '@swimlane/ngx-datatable';
import { findLast, cloneDeep } from 'lodash-es';
import * as moment from 'moment';
import { tap } from 'rxjs/operators';

import { CommonModalService } from '@app/common-modal/common-modal.service';
import { DeleteConfirmComponent } from '@app/delete-confirm/delete-confirm.component';
import { Category } from '@app/category/interfaces/category';
import { CategoryService } from '@app/category/category.service';
import { CategoryModalComponent } from '@app/category/category-modal.component';

@Component({
  templateUrl: './category.component.html',
})
export class CategoryComponent implements OnInit {
  categories: Array<Category>;

  columns: TableColumn[] = [
    { prop: 'title', name: 'Title' },
    { prop: 'url', name: 'Url' },
    { prop: 'createdAt', name: 'Created' },
    { prop: 'updatedAt', name: 'Updated' },
  ];

  currentCategory: Category;

  constructor(
    private categoryService: CategoryService,
    private commonModalService: CommonModalService,
  ) {}

  ngOnInit() {
    this.showCategories();
  }

  openEditModal(id?: string) {
    if (id) {
      this.currentCategory = cloneDeep(findLast(this.categories, { id }));
    } else {
      this.currentCategory = new Category();
    }

    this.commonModalService.openModal<Category>(
      CategoryModalComponent,
      this.currentCategory,
      this.categoryService.save(this.currentCategory).pipe(
        tap(() => this.showCategories())
      ),
    );
  }

  openDeleteModal(id: string) {
    this.currentCategory = cloneDeep(findLast(this.categories, { id }));

    this.commonModalService.openModal<Category>(
      DeleteConfirmComponent,
      null,
      this.categoryService.delete(this.currentCategory.id).pipe(
        tap(() => this.showCategories())
      ),
    );
  }

  showCategories() {
    this.categoryService.getList()
      .subscribe((categories: Array<Category>) => {
        this.categories = cloneDeep(categories);
        this.categories = this.categories.map(category => {
          category.createdAt = moment(category.createdAt).format('DD.MM.YYYY HH:mm');
          category.updatedAt = moment(category.updatedAt).format('DD.MM.YYYY HH:mm');
          return category;
        });
      });
  }
}
