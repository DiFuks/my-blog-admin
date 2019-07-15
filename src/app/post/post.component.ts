import { Component, OnInit } from '@angular/core';
import { PostService } from '@app/post/post.service';
import { IPost } from '@app/post/interfaces/post';
import { CommonModalService } from '@app/common-modal/common-modal.service';

@Component({
  templateUrl: './post.component.html',
})
export class PostComponent implements OnInit {
  posts: Array<IPost>;

  columns = [
    { name: 'Title' },
    { name: 'Description' },
    { name: 'Url' }
  ];

  currentEditId: string;

  constructor(
    private postService: PostService,
    private commonModalService: CommonModalService,
  ) {}

  ngOnInit() {
    this.showPosts();
  }

  openInitModal(id: string) {
    this.commonModalService.popupIsShown.next(true);

    this.currentEditId = id;
  }

  showPosts() {
    this.postService.getPosts()
      .subscribe((posts: Array<IPost>) => {
        this.posts = posts;
      });
  }
}
