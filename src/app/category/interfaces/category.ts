import { Post } from '@app/post/interfaces/post';

export class Category {
  id: string;

  title: string;

  posts?: Array<Post>;

  url: string;

  createdAt: Date;

  updatedAt: Date;
}
