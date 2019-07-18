import { PostContent } from '@app/post/interfaces/post-content';
import { Category } from '@app/category/interfaces/category';

export class Post {
  id: string;

  title: string;

  description: string;

  content: PostContent = [];

  url: string;

  isActive: boolean;

  category: Category = new Category();

  createdAt: string;

  updatedAt: string;
}
