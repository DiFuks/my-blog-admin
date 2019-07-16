import { Component, OnInit, OnDestroy } from '@angular/core';
import { TableColumn } from '@swimlane/ngx-datatable';
import { findLast, cloneDeep } from 'lodash-es';

import { PostService } from '@app/post/post.service';
import { IPost } from '@app/post/interfaces/post';
import { CommonModalService } from '@app/common-modal/common-modal.service';
import { Modals } from '@app/common/modals.enum';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  templateUrl: './post.component.html',
})
export class PostComponent implements OnInit, OnDestroy {
  posts: Array<IPost>;

  columns: TableColumn[] = [
    { prop: 'title', name: 'Title' },
    { prop: 'description', name: 'Description' },
    { prop: 'url', name: 'Url' },
    { prop: 'category.title', name: 'Category title' }
  ];

  currentPost: IPost;

  currentDeleteId: string;

  deleteModalName = Modals.POST_DELETE;

  editModalName = Modals.POST_EDIT;

  constructor(
    private postService: PostService,
    private commonModalService: CommonModalService,
    private toastr: ToastrService,
  ) {}

  ngOnInit() {
    this.showPosts();
  }

  ngOnDestroy() {
    this.commonModalService.closeModal(this.editModalName);
    this.commonModalService.closeModal(this.deleteModalName);
  }

  openEditModal(id: string) {
    this.commonModalService.openModal(this.editModalName);

    this.currentPost = cloneDeep(findLast(this.posts, { id }));
  }

  openDeleteModal(id: string) {
    this.commonModalService.openModal(this.deleteModalName);

    this.currentDeleteId = id;
  }

  save() {
    this.postService.update(this.currentPost).subscribe(() => {
      this.commonModalService.closeModal(this.editModalName);
      this.showPosts();
    }, (error: HttpErrorResponse) => {
      this.toastr.error(error.error.message);
    });
  }

  showPosts() {
    this.postService.getList()
      .subscribe((posts: Array<IPost>) => {
        this.posts = posts;
      });
  }
}
