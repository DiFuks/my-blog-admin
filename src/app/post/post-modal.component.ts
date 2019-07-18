import { Component, Input } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import { Post } from '@app/post/interfaces/post';
import { PostTypes } from '@app/post/enums/post-types';
import { Category } from '@app/category/interfaces/category';
import { CategoryService } from '@app/category/category.service';

@Component({
  templateUrl: './post-modal.component.html',
})
export class PostModalComponent {
  @Input() data: Post;

  postTypes = Object.values(PostTypes);

  Editor = ClassicEditor;

  categories: Category[];

  hljsToMonacoMap = {
    [PostTypes.STYLUS]: 'less',
    [PostTypes.CS]: 'csharp',
    [PostTypes.BASIC]: 'plaintext',
    [PostTypes.ONE_C]: 'plaintext',
    [PostTypes.PROLOG]: 'plaintext',
    [PostTypes.NGINX]: 'plaintext',
    [PostTypes.DART]: 'plaintext',
  };

  constructor(
    private categoryService: CategoryService,
  ) {
    categoryService.getList().subscribe((categories: Category[]) => {
      this.categories = categories;
    });
  }

  addContent() {
    this.data.content.push({
      type: PostTypes.TEXT,
      content: '',
    });
  }

  upContent(index: number) {
    if (index === 0) {
      return;
    }

    const content = this.data.content[index];

    this.data.content.splice(index, 1);

    this.data.content.splice(index - 1, 0, content);
  }

  downContent(index: number) {
    if (index === this.data.content.length - 1) {
      return;
    }

    const content = this.data.content[index];

    this.data.content.splice(index, 1);

    this.data.content.splice(index + 1, 0, content);
  }

  removeContent(index: number) {
    this.data.content.splice(index, 1);
  }

  getSupportedLanguage(postType: PostTypes) {
    let monacoSupportedLanguages = {};

    Object.values(PostTypes).forEach(item => {
      monacoSupportedLanguages[item] = item;
    });

    monacoSupportedLanguages = {
      ...monacoSupportedLanguages,
      ...this.hljsToMonacoMap,
    };

    return monacoSupportedLanguages[postType];
  }
}
