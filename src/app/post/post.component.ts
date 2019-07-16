import { Component, OnInit } from '@angular/core';
import { TableColumn } from '@swimlane/ngx-datatable';
import { findLast, cloneDeep } from 'lodash-es';

import { PostService } from '@app/post/post.service';
import { IPost } from '@app/post/interfaces/post';
import { CommonModalService } from '@app/common-modal/common-modal.service';
import { PostModalComponent } from '@app/post/post-modal.component';
import { tap } from 'rxjs/operators';
import { DeleteConfirmComponent } from '@app/delete-confirm/delete-confirm.component';

@Component({
  templateUrl: './post.component.html',
})
export class PostComponent implements OnInit {
  posts: Array<IPost>;

  columns: TableColumn[] = [
    { prop: 'title', name: 'Title' },
    { prop: 'description', name: 'Description' },
    { prop: 'url', name: 'Url' },
    { prop: 'category.title', name: 'Category title' }
  ];

  currentPost: IPost;

  constructor(
    private postService: PostService,
    private commonModalService: CommonModalService,
  ) {}

  ngOnInit() {
    this.showPosts();
  }

  openEditModal(id: string) {
    this.currentPost = cloneDeep(findLast(this.posts, { id }));

    this.commonModalService.openModal<IPost>(
      PostModalComponent,
      this.currentPost,
      this.postService.update(this.currentPost).pipe(
        tap(() => this.showPosts())
      ),
    );
  }

  openDeleteModal(id: string) {
    this.currentPost = cloneDeep(findLast(this.posts, { id }));

    this.commonModalService.openModal<IPost>(
      DeleteConfirmComponent,
      null,
      this.postService.delete(this.currentPost.id).pipe(
        tap(() => this.showPosts())
      ),
    );
  }

  showPosts() {
    this.postService.getList()
      .subscribe((posts: Array<IPost>) => {
        this.posts = posts;
      });
  }
}
