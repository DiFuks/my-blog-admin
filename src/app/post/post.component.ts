import { Component, OnInit } from '@angular/core';
import { TableColumn } from '@swimlane/ngx-datatable';
import { findLast, cloneDeep } from 'lodash-es';
import * as moment from 'moment';
import { tap } from 'rxjs/operators';

import { PostService } from '@app/post/post.service';
import { Post } from '@app/post/interfaces/post';
import { CommonModalService } from '@app/common-modal/common-modal.service';
import { PostModalComponent } from '@app/post/post-modal.component';
import { DeleteConfirmComponent } from '@app/delete-confirm/delete-confirm.component';

@Component({
  templateUrl: './post.component.html',
})
export class PostComponent implements OnInit {
  posts: Array<Post>;

  columns: TableColumn[] = [
    { prop: 'title', name: 'Title' },
    { prop: 'description', name: 'Description' },
    { prop: 'url', name: 'Url' },
    { prop: 'category.title', name: 'Category title' },
    { prop: 'createdAt', name: 'Created' },
    { prop: 'updatedAt', name: 'Updated' },
  ];

  currentPost: Post;

  constructor(
    private postService: PostService,
    private commonModalService: CommonModalService,
  ) {}

  ngOnInit() {
    this.showPosts();
  }

  openEditModal(id?: string) {
    if (id) {
      this.currentPost = cloneDeep(findLast(this.posts, { id }));
    } else {
      this.currentPost = new Post();
    }

    this.commonModalService.openModal<Post>(
      PostModalComponent,
      this.currentPost,
      this.postService.save(this.currentPost).pipe(
        tap(() => this.showPosts())
      ),
    );
  }

  openDeleteModal(id: string) {
    this.currentPost = cloneDeep(findLast(this.posts, { id }));

    this.commonModalService.openModal<Post>(
      DeleteConfirmComponent,
      null,
      this.postService.delete(this.currentPost.id).pipe(
        tap(() => this.showPosts())
      ),
    );
  }

  showPosts() {
    this.postService.getList()
      .subscribe((posts: Array<Post>) => {
        this.posts = cloneDeep(posts);
        this.posts = this.posts.map(post => {
          post.createdAt = moment(post.createdAt).format('DD.MM.YYYY HH:mm');
          post.updatedAt = moment(post.updatedAt).format('DD.MM.YYYY HH:mm');
          return post;
        });
      });
  }
}
