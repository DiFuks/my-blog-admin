import { Component, OnInit } from '@angular/core';
import { PostService } from '@app/post/post.service';
import { Post } from '@app/post/interfaces/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.less']
})
export class PostComponent implements OnInit {
  posts: Array<Post>;

  constructor(
    private postService: PostService,
  ) {}

  ngOnInit() {
    this.showPosts();
  }

  showPosts() {
    this.postService.getPosts()
      .subscribe((posts: Array<Post>) => {
        this.posts = posts;
      });
  }
}
