import { Component, OnInit } from '@angular/core';
import { PostService } from '@app/post/post.service';
import { IPost } from '@app/post/interfaces/post';

@Component({
  templateUrl: './post.component.html',
})
export class PostComponent implements OnInit {
  posts: Array<IPost>;

  constructor(
    private postService: PostService,
  ) {}

  ngOnInit() {
    this.showPosts();
  }

  showPosts() {
    this.postService.getPosts()
      .subscribe((posts: Array<IPost>) => {
        this.posts = posts;
      });
  }
}
