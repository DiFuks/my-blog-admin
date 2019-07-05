import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post.component';
import { PostService } from '@app/post/post.service';

@NgModule({
  declarations: [
    PostComponent
  ],
  providers: [
    PostService
  ],
  imports: [
    CommonModule
  ]
})
export class PostModule { }
