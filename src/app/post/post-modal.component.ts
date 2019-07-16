import { Component, Input } from '@angular/core';
import { IPost } from '@app/post/interfaces/post';

@Component({
  templateUrl: './post-modal.component.html',
})
export class PostModalComponent {
  @Input() data: IPost;
}
