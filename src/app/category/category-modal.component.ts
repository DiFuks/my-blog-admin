import { Component, Input } from '@angular/core';

import { Category } from '@app/category/interfaces/category';

@Component({
  templateUrl: './category-modal.component.html',
})
export class CategoryModalComponent {
  @Input() data: Category;
}
