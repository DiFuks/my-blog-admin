import { PostContent } from '@app/post/interfaces/post-content';
import { ICategory } from '@app/category/interfaces/category';

export class IPost {
  id: string;

  title: string;

  description: string;

  content: PostContent;

  url: string;

  category: ICategory | string;

  createdAt: Date;

  updatedAt: Date;
}
